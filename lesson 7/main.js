// // class dog{
// //     constructor(weight,height,color){
// //         this.weight = weight;
// //         this.height = height;
// //         this.color = color;
// //     }
// // }
// //  const rex = new dog(40 , 55,`violet`)
// //  const bobik = new dog(3, 80,`yellow`)


// //////1 Абастрактный класс
// class Animal {
//     constructor(type,sex,color,voiceText){
//         this.type = type;
//         this.sex = sex;
//         this.color = color;
//         this.voiceText = voiceText;
//     }
// }
//  class dog extends Animal {
//      constructor(color,sex,type,voiceText, puproseText){
//          super(color,sex,type,voiceText)
//          this.puproseText = puproseText;
//      }
//      puprose(){
//          console.log(`dog:${this.name}/nPuprose: ${this.puproseText}`)
//      }
//  }
//  const rex = new dog(
//      `red`
//      `male`
//      `ХИЩНИК`
//      `gaf gaf`
//      `ЗАЩИЩАТЬ`
//  )
// rex.puprose
//  const bublik = new dog (
//      `red`
//      `female`
//      `домащний`
//      `мяу ой тоесть гаф`
//      `ФЕЙС КОНТРОЛЬ`
//  )
//  bublik.puprose
class dom{
         constructor(roof,materials,doorsmat,wall,animals,peoples,color){
             this.roof = roof;
             this.materials = materials;
             this.doorsmat = doorsmat;
             this.wall = wall;
             this.animals = animals;
             this.peoples = peoples;
             this.color = color;
         }
        }
        class dom2 extends dom{
            constructor(roof,materials,doorsmat,wall,animals,peoples,color,farm){
            super(roof,materials,doorsmat,wall,animals,peoples,color);
            this.farm = farm;
            }
            farm(){
                console.log(`dom2:${this.roof}/nfarm: ${this.farm}`)
            }
        }
        const qwerty = new dom2(
                  'true',
                  'brick and weed',
                  'wood and plastic',
                  'wood and baton',
                  'true 6',
                    'true 4',
                   'darkblue',
                   'false'
                                  )
        console.log(qwerty)