#import pisteGraph

class preferences:
    waitingTimeOptimization = 0.75   #float between 0 and 1
    discoveryOptimization = 0.5      #float between 0 and 1
    bluePiste = True
    redPiste = False                 
    blackPiste = False               

class statistics:
    timeOnSki = 1
    distanceCovered = 0
    altitudeCovered = 0
    averageVelocity = distanceCovered/timeOnSki

def getCoveringCounter(edge):
    coveringCounter = 8
    return coveringCounter

def getCurrentLocation():
    currentLocation = 1             #node user is currently at
    return currentLocation