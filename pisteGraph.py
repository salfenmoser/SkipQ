import sys
import userData
import networkx as nx

def getPisteGraph():
    pisteGraph=nx.MultiDiGraph()
    pisteGraph.add_nodes_from([1,2,3,4])

    pisteGraph.add_edge(1,2, color = 'red', name = '1b')
    pisteGraph.add_edge(2,3, color = 'black', name = '2')
    pisteGraph.add_edge(1,4, color = 'blue', name = '3')
    pisteGraph.add_edge(4,3, color = 'blue', name = '4')

    pisteGraph.add_edge(2,1, color = 'lift', name = 'Lift1')
    pisteGraph.add_edge(3,1, color = 'lift', name = 'Lift2')

    return pisteGraph


def getPersonalGraph(preferences):
    personalGraph = getPisteGraph()
    if (preferences.redPiste == False):
        for edge in personalGraph.edges:
            print edge

    return personalGraph

def getColor(graph,edge):
    colors = nx.get_edge_attributes(graph,'color')
    color = colors[edge]
    return color

def getName(graph,edge):
    names = nx.get_edge_attributes(graph,'name')
    name = names[edge]
    return name


graph = getPersonalGraph(userData.preferences)
#print getColor(graph, (1,2,0))