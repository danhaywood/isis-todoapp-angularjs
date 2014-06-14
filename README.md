

running:

    mvn archetype:generate                                       \
      -D archetypeGroupId=org.apache.isis.archetype              \
      -D archetypeArtifactId=quickstart_wicket_restful_jdo-archetype \
      -D archetypeVersion=1.3.1                                  \
      -D groupId=com.danhaywood.isis                             \
      -D artifactId=isis-todoapp-angularjs                       \
      -D version=1.0-SNAPSHOT                                    \
      -B
  

generates:
  
    ./isis-todoapp-angularjs
      pom.xml
      dom/
      fixture/
      integtests/
      webapp/
  
  
  
using https://github.com/yeoman/generator-angular

run:

    npm install -g generator-angular

    cd isis-todoapp-angularjs/webapp/src/main/webapp
    yo angular

creates:

    ./isis-todoapp-angularjs
      webapp/
        src/
          main/
            webapp/
              client    <=== created


run:

    mvn clean install
    cd webapp
    mvn jetty:run


browse to http://localhost:8080/isis-todoapp-angularjs-webapp/client/app/index.html



##Webstorm

Jetbrains IDE extension for Chrome
installed AngularJS plugin ... http://plugins.jetbrains.com/plugin/6971


create new project from existing sources, already hosted under webserver (first choice in wizard)

specify parameters for new server:
- web server root URL: http://localhost:8080/isis-todoapp-angularjs-webapp/client
- web path for project root: app



Chrome store
- AngularJS Batarang



yo angular:route login


Bootsnipp for login page


