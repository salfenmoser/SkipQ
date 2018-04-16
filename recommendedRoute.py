import pisteGraph
import userData
import networkx as nx
import waitingTime

from sets import Set


def getRouteRecommendation():
    location = userData.getCurrentLocation()
    preferences = userData.getUserPreferences()
    graph = pisteGraph.getPisteGraph()
    possiblePaths = getPossiblePaths(location, graph)
    recommendedRoute = []
    score = 0
    #print len(list(possiblePaths))
    for numberDestinations in range(len(list(possiblePaths))):
        for path in list(possiblePaths[numberDestinations]):
            print path
            newScore = getScore(path, graph, preferences)
            #print newScore
            if (newScore > score):
                recommendedRoute = path
    return recommendedRoute

def getPossiblePaths(location, graph):
    possiblePaths = []
    for node in graph.nodes:
        if (node != location):
            possiblePaths.append(nx.all_simple_paths(graph,location,node))
    return possiblePaths

def getScore(path, graph, preferences):
    score = 0
    edgesinpath=zip(path[0:],path[1:])
    print edgesinpath
    destinationNode = edgesinpath[-1][-1]
    print 'destination node ', destinationNode

    #check skiing skills
    if preferences[2] == 0:             #no red
        for u,v in edgesinpath:
            for i in range(len(graph.get_edge_data(*(u,v)))):
                if (pisteGraph.getColor(graph,(u,v,i)) == 'red'):
                    return score
    if preferences[3] == 0:             #no black
        for u,v in edgesinpath:
            for i in range(len(graph.get_edge_data(*(u,v)))):
                if (pisteGraph.getColor(graph,(u,v,i)) == 'black'):
                    return score

    # add waiting time parameter
    time = waitingTime.getWaitingTime(destinationNode)
    score += preferences[0]/time

    return score


print getRouteRecommendation()