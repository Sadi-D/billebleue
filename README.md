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
`use billebleue`

* vérifier présence de la nouvelle base :
`show dbs`

* creation de l'admin pour la base : 
`db.createUser({
     user: 'teamBilleBleue',
     pwd: 'camembert',
     roles: ['readWrite', 'dbAdmin'] 
     })`
     
* Creation de la collection : 
`db.createCollection('products') `

* vérifier présence de la collection products :
`show collections`    

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

`db.products.insert([
                      { name:"Biftek",
                        num_agrement:"FR 11.058.07 nCE",
                        label:"La Bille Bleue",
                        date_collecte:"2020-10-13T10:53:53.000+00:00",
                        date_transformation:"2020-10-13T10:53:53.000+00:00",
                        type_elevage:"Petit élevage",
                        information_elevage: [
                          { nom_elevage:"La Ferme de Gérard",
                            commune:"Finistère",
                            spect_exploitation:"agriculture biologique"
                          }
                        ],
                        information_animal: [
                          { nom_animal:"Clochette",
                            race:"Vache bretonne pie noir",
                            age_abattage:"5 ans",
                            lieu_naissance:"Morbihan - Ferme de Gérard",
                            "alimentation": "Herbe frâiche / foin"
                          }
                        ]
                      }
                    ])`
 `db.products.insert([             
 { name:"Yaourt",
  num_agrement:"FR\\n21.073.07\\nCE",
  label:"La Bille Bleue",
  date_collecte:"2020-11-13T10:53:53.000+00:00",
  date_transformation:"2020-09-13T10:53:53.000+00:00",
  type_elevage:"Petite exploitation",
  information_elevage: [
    { nom_elevage:"La Ferme de Monique",
      commune:"Vendée",
      spect_exploitation:"agriculture biologique"
    }
  ],
  information_produit: [
    { type_lait:"lait cru",
      transformation:"ferment lactique"
    }
  ]
}     
 ])`
* vérifier que l'item est bien en base :
`db.products.find().pretty();` ou `db.products.findOne({name:"Biftek"})`


(si ça fonctionne je te rajoutte le reste des items sous cette forme)

//////////////////////////

# Setup Node.js Backend Project :
* aller dans backend :
`npm i`
 
* faire tourner le backend : 
'node app'
