import pisteGraph
import userData
import networkx as nx
import waitingTime

from sets import Set


def getRouteRecommendation():
    location = userData.getCurrentLocation()
    preferences = userData.preferences
    graph = pisteGraph.getPersonalGraph(preferences)
    paths, score = getPossiblePaths(location, graph)
    recommendedRouteIndex = score.index(min(score))
    recommendedRoute = paths[recommendedRouteIndex]
    return recommendedRoute

def getPossiblePaths(location, graph):
    possiblePaths = []
    routeScore = []
    for node in graph.nodes:
        if (node != location and pisteGraph.getNodeType(graph,node) == 'valleyLift'):
            path = nx.dijkstra_path(graph,location,node, 'weight')
            weight = nx.dijkstra_path_length(graph,location,node, 'weight')
            coveredDistance = pisteGraph.getCoveredDistance(graph,path)
            possiblePaths.append(path)
            routeScore.append(weight/coveredDistance)
    return possiblePaths, routeScore


print getRouteRecommendation()