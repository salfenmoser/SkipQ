import sys
import userData
import waitingTime
import networkx as nx


def getPisteGraph():
    pisteGraph=nx.MultiDiGraph()
    pisteGraph.add_node(1, type = 'mountainLift', name = 'mountain', weight = 0)
    pisteGraph.add_node(2, type = 'valley', name = 'valley1', weight = 0)
    pisteGraph.add_node(3, type = 'valleyLift', name = 'valleyLift1', weight = 0)
    pisteGraph.add_node(5, type = 'valley', name = 'valley2', weight = 0)
    pisteGraph.add_node(6, type = 'valleyLift', name = 'valleyLift2', weight = 0)
    pisteGraph.add_node(4, type = 'cabin', name = 'cabin1', weight = 10)


    pisteGraph.add_edge(1,2, type = 'piste', color = 'blue', name = '1a', length = '6', weight = 0)
    pisteGraph.add_edge(1,2, type = 'piste', color = 'red', name = '1b', length = '2', weight = 0)
    pisteGraph.add_edge(2,5, type = 'piste', color = 'black', name = '2', length = '1', weight = 0)
    pisteGraph.add_edge(1,4, type = 'piste', color = 'blue', name = '3', length = '3', weight = 0)
    pisteGraph.add_edge(4,5, type = 'piste', color = 'blue', name = '4', length = '4', weight = 0)

    pisteGraph.add_edge(2,3, type = 'queue', color = 'none', name = 'queueLift1', length = '0', weight = 0)
    pisteGraph.add_edge(5,6, type = 'queue', color = 'none', name = 'queueLift2', length = '0', weight = 0)

    pisteGraph.add_edge(2,1, type = 'lift', color = 'none', name = 'Lift1', length = '0', weight = 0)
    pisteGraph.add_edge(3,1, type = 'lift', color = 'none', name = 'Lift2', length = '0', weight = 0)

    return pisteGraph


def getPersonalGraph(userPreferences):
    personalGraph = getPisteGraph()
    removePistes(personalGraph, userPreferences)
    giveWeightsToQueues(personalGraph, userPreferences)
    giveWeightsToPistes(personalGraph, userPreferences)
    
    return personalGraph

def removePistes(graph,preferences):
    edgesToRemove = []

    for edge in graph.edges:
        if (preferences.bluePiste == False and getEdgeColor(graph,edge) == 'blue'):
            edgesToRemove.append(edge)
            print 'removed edge ', edge, ' because blue'
        if (preferences.redPiste == False and getEdgeColor(graph,edge) == 'red'):
            edgesToRemove.append(edge)
            print 'removed edge ', edge, ' because red'
        if (preferences.blackPiste == False and getEdgeColor(graph,edge) == 'black'):
            edgesToRemove.append(edge)
            print 'removed edge ', edge, ' because black'
    
    graph.remove_edges_from(edgesToRemove)
    return graph


def giveWeightsToQueues(graph,preferences):
    for edge in graph.edges:
        if (getEdgeType(graph,edge) == 'queue'):
            time = waitingTime.getWaitingTime(edge)
            graph.edges[edge]['weight']=preferences.waitingTimeOptimization*time
    return graph

def giveWeightsToPistes(graph, preferences):
    for edge in graph.edges:
        if (getEdgeType(graph,edge) == 'piste'):
            coveringCounter = userData.getCoveringCounter(edge)
            graph.edges[edge]['weight']=preferences.discoveryOptimization*coveringCounter
    return graph

def getEdgeType(graph,edge):
    return graph.get_edge_data(*edge)['type']

def getEdgeColor(graph,edge):
    return graph.get_edge_data(*edge)['color']

def getEdgeName(graph,edge):
    return graph.get_edge_data(*edge)['name']

def getEdgeWeight(graph,edge):
    return graph.get_edge_data(*edge)['weight']

def getEdgeLength(graph,edge):
    return graph.get_edge_data(*edge)['length']

def getNodeType(graph,node):
    return nx.get_node_attributes(graph,'type')[node]

def getNodeName(graph,node):
    return nx.get_node_attributes(graph,'name')[node]

def getNodeWeight(graph,node):
    return nx.get_node_attributes(graph,'weight')[node]  

def getCoveredDistance(graph, path):
    coveredDistance = 0.
    for i in range(len(path)-1):
        edge = [path[i],path[i+1],0]
        coveredDistance += float(getEdgeLength(graph, edge))
    return coveredDistance
