### requirements
1. node
2. npm

### install dev tools
1. ``` npm install -g cordova ```
2. ``` npm install -g grunt ```
3. ``` npm install -g grunt-cli ```
4. ``` npm install -g bower ```
5. ``` npm install -g karma-cli ```

### install project
1. clone project repo
2. ```npm install```
3. ```bower install```

### for webfonts
```brew install ttfautohint fontforge --with-python```

### development setup webfonts & scss ( optional )
```grunt dev```

### www setup
 ```grunt www```

### compile scss files 
```grunt sass```

### Add Android platform
```cordova platform add android```


### Add iOs platform
```cordova platform add ios```

### cordova plugin - geolocation 
```cordova plugin add org.apache.cordova.geolocation```


### Build Android
```cordova build android```

### Build iOs
```cordova build ios```



#Services

### 1. List Events:
https://api.event0.com/service.php?func=getEvents&date_from=2015-11-14&lat=47.994105&lon=7.839973&categories=comma-separated

### 2. List Places
https://api.event0.com/service.php?func=getPlaces&lat=49.863700&lon=11.932036&categories=comma-separated

### 3. List Cities
http://api.event0.com/service.php?func=getCities&token=...


#### notes:

https://webprojaggtgmbhcokg.basecamphq.com/projects/12757215/file/202672641/doku.txt
http://api.event0.com/service.php?func=getEvents&date_from=2015-11-14&lat=47.994105&lon=7.839973
http://api.event0.com/service.php?func=listEventCategories
http://api.event0.com/service.php?func=listPlaceCategories



http://api.event0.com/service.php?func=getEvents&date_from=2015-05-10&lat=48.76683124256201&lon=9.175721607156486