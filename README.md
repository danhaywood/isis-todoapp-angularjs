
build archetype:

    mvn archetype:generate                                       \
      -D archetypeGroupId=org.apache.isis.archetype              \
      -D archetypeArtifactId=quickstart_wicket_restful_jdo-archetype \
      -D archetypeVersion=1.5.0                                  \
      -D groupId=com.danhaywood.isis                             \
      -D artifactId=isis-todoapp-angularjs                       \
      -D version=1.0-SNAPSHOT                                    \
      -B
  
(ok, ran 1.3.1; subsequently have manually patched to 1.5.0)

generates:
  
    ./isis-todoapp-angularjs
      pom.xml
      dom/
      fixture/
      integtests/
      webapp/
  
  

  

run (ie from https://github.com/yeoman/generator-angular):

    npm install -g yo grunt-cli bower
    npm install -g generator-angular


    cd isis-todoapp-angularjs/webapp/src/main/webapp

Run:
    yo angular

and
- deselected SASS
- selected bootstrap
- deselected all other components

creates:

    ./isis-todoapp-angularjs
      webapp/
        src/
          main/
            webapp/
              client    <=== created

              
edit .bowerrc:
  {
      "directory": "app/components",
      "json": "bower.json" // Add this line
  }

rename component.json to bower.json


Install Angular Bootstrap:

    bower install angular-bootstrap --save
              

            
Create an Angular route called 'login':
              
    yo angular:route login


    
start hacking...


    
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
              
run:

    mvn clean install
    cd webapp
    mvn jetty:run


browse to http://localhost:8080/isis-todoapp-angularjs-webapp/client/app/index.html




vi .bowerrc:

  {
      "directory": "app/components",
      "json": "bower.json" // Add this line
  }


  
  
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


##IntelliJ IDEA

* Jetbrains IDE extension for Chrome
* installed AngularJS plugin ... http://plugins.jetbrains.com/plugin/6971



specify parameters for new server:
- web server root URL: http://localhost:8080/isis-todoapp-angularjs-webapp/client
- web path for project root: app



Chrome store
- AngularJS Batarang




~~~~~~~~~~~~
References:
* http://www.sitepoint.com/kickstart-your-angularjs-development-with-yeoman-grunt-and-bower/
* https://github.com/yeoman/generator-angular

Other resources:
* Bootsnipp for login page
* http://html5boilerplate.com/

