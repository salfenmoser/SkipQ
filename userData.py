import pisteGraph

def getUserPreferences():
    preferences = []
    waitingTimeOptimization = 0.5   #float between 0 and 1
    explorerOptimization = 0.4      #float between 0 and 1
    redPiste = 0                    #0 if no, 1 if yes
    blackPiste = 1                  #0 if no, 1 if yes
    preferences.extend((waitingTimeOptimization, explorerOptimization,redPiste,blackPiste))
    return preferences

def getUserStatistics():
    coveredEdges = []
    pisteGraph = getPisteGraph()
    for edge in pisteGraph.edge:
        counter = coveringCounter(edge)
        coveredEdges.append((edge,counter))
    return coveredEdges

def coveringCounter(edge):
    coveringCounter = 0
    return coveringCounter

def getCurrentLocation():
    currentLocation = 1             #node user is currently at
    return currentLocation