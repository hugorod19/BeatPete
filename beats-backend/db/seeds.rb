# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all 
Beat.destroy_all

hugo = User.create(name: "Hugo");
beat1 = Beat.create(name: "Hugo's Beats", user: hugo, 
kicks: ["1", "0", "0", "1", "0", "0", "0", "1", "0", "0", "1", "0", "0",
"0", "0", "0" 
],
snares: ["0", "0", "0", "0", "1", "0", "0", "0", "0", "0", "0", "0", "1",
"0", "0", "0" 
]
)

abbo = User.create(name: "Abbo");
beat2 = Beat.create(name: "Abbo's Beats", user: abbo, 
kicks: ["1", "0", "0", "1", "0", "0", "0", "1", "0", "0", "1", "0", "0",
"0", "0", "0" 
],
snares: ["0", "0", "0", "0", "1", "0", "0", "0", "0", "0", "0", "0", "1",
"0", "0", "0" 
]
)
