# Gest-Stock
+Notre projet consiste en la création d'un logiciel de gestion de stock et de consultation de vétérinaire, utilisant les technologies Angular, Spring Boot et 
Docker.Le logiciel permettra aux vétérinaires de gérer leur stock de médicaments et de fournitures, ainsi que de prendre des rendez-vous et de consulter les dossiers médicaux de leurs patients. La partie sécurité du logiciel sera mise en place afin de garantir la protection des données sensibles des patients, notamment les informations médicales et personnelles.

# Le choix d'Angular et Spring Boot est dû à leur facilité d'utilisation et leur robustesse, ainsi qu'à leur compatibilité avec Docker, qui permettra de déployer le logiciel de manière efficace et rapide. Le déploiement dans des conteneurs Docker permettra également une gestion simplifiée de l'infrastructure et une meilleure portabilité du logiciel.

# Comprendre l’application Gest-Stockc avec quelques diagrammes
# Voir la présentation ici

# Diriger Gest-Stock localement
Gest-Stock est une application Spring Boot construite à l’aide de Maven ou Gradle. Vous pouvez créer un fichier jar et l’exécuter à partir de la ligne de commande (il devrait fonctionner aussi bien avec Java 17 ou plus récent):

# git clone https://github.com/kifalangeric/Gest-Stock.git
cd Gest-Stock
./mvnw package
java -jar target/*.jar
Vous pouvez ensuite accéder à Gest-Stock à http://localhost:8080/

# Gest-Stock

# Ou vous pouvez l’exécuter directement à partir de Maven en utilisant le plugin Spring Boot Maven. Si vous faites cela, il détectera immédiatement les modifications que vous apportez au projet (les modifications apportées aux fichiers sources Java nécessitent également une compilation - la plupart des gens utilisent un IDE pour cela):

./mvnw spring-boot:run
# Remarque : les utilisateurs de Windows doivent définir pour éviter les assertions de format échouer la génération (utilisez pour définir cet indicateur globalement).git config core.autocrlf true--global

# REMARQUE: Si vous préférez utiliser Gradle, vous pouvez générer l’application à l’aide et rechercher le fichier jar dans ../gradlew buildbuild/libs

# Construction d’un conteneur
Il n’y en a pas dans ce projet. Vous pouvez créer une image de conteneur (si vous avez un démon docker) à l’aide du plug-in Spring Boot build :Dockerfile

# ./mvnw spring-boot:build-image
Si vous trouvez un bug / amélioration suggérée pour Gest-Stock
Notre outil de suivi des problèmes est disponible ici

# Configuration de la base de données
Dans sa configuration par défaut, Gest-Stock utilise une base de données 

# Une configuration similaire est fournie pour MySQL et PostgreSQL si une configuration de base de données persistante est nécessaire. Notez que chaque fois que le type de base de données change, l’application doit s’exécuter avec un profil différent : pour MySQL ou pour PostgreSQL.spring.profiles.active=mysqlspring.profiles.active=postgres

# Vous pouvez démarrer MySQL ou PostgreSQL localement avec n’importe quel programme d’installation qui fonctionne pour votre système d’exploitation ou utiliser docker:

# docker run -e MYSQL_USER=Gest-Stock -e MYSQL_PASSWORD=Gest-Stock -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE=Gest-Stock -p 3306:3306 mysql:8.0
ou

# docker run -e POSTGRES_USER=Gest-Stock -e POSTGRES_PASSWORD=Gest-Stock -e POSTGRES_DB=Gest-Stock -p 5432:5432 postgres:15.2
Une documentation supplémentaire est fournie pour MySQL et PostgreSQL.

# Compilation du CSS
Il y a un dans . Il a été généré à partir de la source, combinée avec la bibliothèque Bootstrap. Si vous apportez des modifications au , ou mettez à niveau Bootstrap, vous devrez recompiler les ressources CSS à l’aide du profil Maven « css », c’est-à-dire . Il n’y a pas de profil de build pour que Gradle compile le CSS.Gest-Stock.csssrc/main/resources/static/resources/cssGest-Stock.scssscss./mvnw package -P css

# Travailler avec Gest-Stock dans votre IDE
Conditions préalables
Les éléments suivants doivent être installés sur votre système :

# Java 17 ou version ultérieure (JDK complet, pas un JRE).
Outil de ligne de commande git
Votre IDE préféré

# Eclipse avec le plugin m2e. Remarque: lorsque m2e est disponible, il y a une icône m2 dans la boîte de dialogue. Si m2e est Pas là, suivez le processus d’installation iciHelp -> About
Spring Tools Suite (STS)
IntelliJ IDEA
VS Code
Escalier:
Sur la ligne de commande, exécutez :

# git clone git clone https://github.com/kifalangeric/Gest-Stock.git
À l’intérieur d’Eclipse ou STS :

# File -> Import -> Maven -> Existing Maven project
Ensuite, générez sur la ligne de commande ou utilisez le lanceur Eclipse (clic droit sur le projet et ) pour générer le css. Exécutez la méthode principale de l’application en cliquant dessus avec le bouton droit de la souris et en choisissant ../mvnw generate-resourcesRun As -> Maven installRun As -> Java Application

# Dans IntelliJ IDEA Dans le menu principal, choisissez et sélectionnez le pom.xml Gest-Stock. Cliquez sur le bouton.File -> OpenOpen

# Les fichiers CSS sont générés à partir de la version Maven. Vous pouvez les construire sur la ligne de commande ou cliquer avec le bouton droit de la souris sur le projet, puis ../mvnw generate-resourcesspring-Gest-StockclinicMaven -> Generates sources and Update Folders

# Une configuration d’exécution nommée doit avoir été créée pour vous si vous utilisez une version Ultimate récente. Sinon, exécutez l’application en cliquant avec le bouton droit sur la classe principale et en choisissant .ClinicApplicationGest-StockClinicApplicationRun 'ClinicApplication'

# **Accédez à Gest-Stock**


# Visitez http://localhost:8080 dans votre navigateur.

Vous cherchez quelque chose en particulier?
Spring Boot Configuration	Fichiers de propriétés de classe ou Java
La classe principale	ClinicApplication
Fichiers de propriétés	application.propriétés

# Cache	CacheConfiguration
Branches et fourches intéressantes de Spring Gest-Stock
La branche « principale » de Spring Gest-Stock dans l’organisation GitHub spring-projects est l’implémentation « canonique » basée sur Spring Boot et Thymeleaf. Il y a pas mal de forks dans l’organisation GitHub spring-Gest-Stock. Si vous souhaitez utiliser une pile technologique différente pour mettre en œuvre la clinique pour animaux de compagnie, veuillez rejoindre la communauté là-bas.

# Interaction avec d’autres projets open source
L’un des meilleurs aspects du travail sur l’application Spring Gest-Stock est que nous avons la possibilité de travailler en contact direct avec de nombreux projets Open Source. Nous avons trouvé des bugs / améliorations suggérées sur divers sujets tels que Spring, Spring Data, Bean Validation et même Eclipse! Dans de nombreux cas, ils ont été corrigés / mis en œuvre en quelques jours seulement. En voici une liste :

# Nom	Émettre
Spring JDBC : simplifier l’utilisation de NamedParameterJdbcTemplate	SPR-10256 et SPR-10257
Bean Validation / Hibernate Validator: simplifiez les dépendances Maven et la rétrocompatibilité	HV-790 et HV-792
Spring Data : offre plus de flexibilité lors de l’utilisation de requêtes JPQL	DONNÉESJPA-292

# Contribuant
Le suivi des problèmes est le canal préféré pour les rapports de bogues, les demandes de fonctionnalités et la soumission de demandes d’extraction.

Pour les pull requests, les préférences de l’éditeur sont disponibles dans la configuration de l’éditeur pour une utilisation facile dans les éditeurs de texte courants. En savoir plus et télécharger des plugins sur https://editorconfig.org. Si vous ne l’avez pas déjà fait, veuillez remplir et soumettre le Contrat de licence de contributeur.



Merci pour votre attention

