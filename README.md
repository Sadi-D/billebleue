#Environnement

1) Installer Android Studio + Créer un device virtuel dessus
2) Installer le Java Development Kit (JDK 8)
3) Mettre en place les variables d'environnement. Voir la doc react-native (https://reactnative.dev/docs/environment-setup)

#Lancer l'application

Commande pour lancer l'application: react-native run-android

# INSTALLATION BDD BILLE BLEUE MONGO

* lancer le mongo :
`mongo`

* Création de la base de donnée :
`use teamBilleBleue`

* creation de l'admin pour la base : 
`db.createUser({
     user: 'teamBilleBleue',
     pwd: 'camembert',
     roles: ['readWrite', 'dbAdmin'] 
     })`

* insertion des données en base :
  pour l'item camembert :

`db.products.insert([
{ name:"camembert", num_agrement:"FR 01.053.07 CE", label:"La Bille Bleue", date_collecte:"2020-10-13T10:53:53.000+00:00", date_transformation:"2020-12-13T10:53:53.000+00:00", type_elevage:"Petit élevage", information_elevage: [
		{nom_elevage:"La petite Ferme", 
		commune:"Loir et Cher",
        spect_exploitation:"agriculture biologique"
		}
	]
}
])`

(si ça fonctionne je te rajoutte le reste des items sous cette forme)

//////////////////////////
Setup Node.js Backend Project :
* aller dans backend :
`npm i`
 
* faire tourner le backend : 
'node app'
