// Ryan Shanz
// Text Adventure Code
//
//images generated from Dalle AI or link in tag
//confetti animation downloaded from confetti.js


const textShown= document.getElementById("text")
const buttons= document.getElementById("options")
const image= document.getElementById("img")
const confetti=document.getElementById("confetti")


function start(){
    showText(1)
}
// textNode = the big_text_node item that correlates with the id passed in (text_node_id)
// then textShown = the textNode text.

function showText(text_node_id){
    const textNode = big_text_node.find(textNode => textNode.id === text_node_id)
   
    textShown.innerHTML = textNode.text
    image.innerHTML = textNode.img





// needed help below :(
    while(buttons.firstChild) {
        buttons.removeChild(buttons.firstChild)
    }

// forEach option in options array, create button, print button text, execute functions for clicking -- needed help with addEventListener.
    textNode.options.forEach(option =>{
            const button = document.createElement('button')
            button.innerText= option.text
            button.classList.add('button')
            button.addEventListener('click', () => chooseButton(option))
            buttons.appendChild(button)
        
    })
}


function chooseButton(option){
    const nextText_Id = option.nextText
    const confetti=option.confetti
    if (nextText_Id == 0){
        start()
    }
// 
//Some item's have confetti=0; i realized halfway through they are not needed. will delete eventually
//
// if button pressed is winning button, confetti =1 => confetti shows after button pressed
    if(confetti==1){
        startConfetti()
        showText(nextText_Id)
        
    }
// confetti=2 only when "start over" button is pressed after winning. it stops confetti gradually (more fun than immediately :) )
    if(confetti==2){
        stopConfetti()
        showText(nextText_Id)
    }
    else{
        showText(nextText_Id)
    }
}



const big_text_node = [

    {
        id:1,
        text: 'You wake up in your bed, like usual, unaware of the unusual events that are about to transpire.\
               Hungry, you walk to the kitchen, salivating at the thought of a big breakfast this morning.\
               Before you can make that, though, you notice a strange object in the middle of the room. The object is\
               a box, with a lever sticking vertically from the center. Arrows on the side of the box point forward\
               and backward, indicating the directions of the lever. You are intrigued, but hungry. Do you push the\
               lever forward, pull it backward, or make breakfast?',
        options: [
            {
                text: 'Push forward',
                nextText: 2,
                confetti: 0
            }, 
            {
                text: 'Pull backward',
                nextText: 3,
                confetti: 0
            },   
            {
                text: 'Ignore the item and eat',
                nextText:4,
                confetti:0
            }
            
        ],
        img: '<img src ="https://m.media-amazon.com/images/I/71xedIZEwdL._AC_SL1500_.jpg" alt="Photo from Amazon of lever" width=300 height=300></img>'
    },    
    {
        //id 2, 5-17 is 'push forward' subtree
        id:2,
        text: 'You decide to push the lever forward. Instantly, you are shivering. Before you even know it, you\
                have been transported to a snowy, windy mountain top. Somehow, it is night. The darkness looms over you,\
                but light coming from various windows illuminate a giant building in front of you - a castle. The\
                gorgeous architecture leaves you in awe, but the gusting winds leaves you freezing. Do you explore the\
                outside of the castle some more, or walk in the menacing front doors?',
        options:[
            {
                text: 'Enter',
                nextText:5,
                confetti: 0
            },
            {
                text:'Explore',
                nextText:6,
                confetti: 0,
            }
        ],
        img: '<img src="dalle_outside_castle.png" alt= "photo of person sitting outside a castle in the snow" width=300 height=300></img>'
    },  
    {
        id: 3,
        text: 'You decide to pull the lever backwards. Instantly, you are transported to an alien environment. As your\
                eyes adjust, you realize you are on a spaceship. \
                You see three buttons in front of you - a green one, a red one, and a blue one. Which one do you press?',
        options:[
            {
            text: 'Green',
            nextText:18,
            confetti:0
            },
            {
                text: 'Red',
                nextText: 19,
                confetti:0
            },
            {
                text: 'Blue',
                nextText: 20,
                confetti:0
            }
        ],
        img: '<img src="person_sitting_spaceship.png" alt="Person sitting at the controls of a spaceship" width=300 height=300></img>'
    },
    // id 4 is 'do nothing' subtree
    {
        id: 4,
        text: 'Your breakfast was so good that you choked on it and died. Start over.',
        options:[
            {
                text:'Start over',
                nextText: 0,
                confetti:0
            }
       ],
       img: '<img src="sad_eater.png" alt= "Person sad eating food" width=300 height=300></img>'
    },
    {
        id: 5,
        text: 'You decide to enter the castle. With all your weight pushed up against the concrete doors,\
               you manage to make your way inside. The entry is a sight to behold. In front of you are two\
               parallel sets of stairs, both going up and leading to two separate doors. In between those staircases\
               is a descending one. Which direction will you walk?',
        options:[
            {
                text: 'Left',
                nextText: 7,
                confetti:0
            },
            {
                text: 'Middle',
                nextText: 8,
                confetti:0
            },
            {
                text: 'Right',
                nextText: 9,
                confetti:0
            }
        ],
        img: '<img src="https://t3.ftcdn.net/jpg/03/53/63/74/360_F_353637419_FO560joWugRH1YzuvbSTXDzFPZd88CdD.jpg" alt="Castle with three staircases" width=300 height=300></img>'
    },
    {
        id:6,
        text: 'You are fascinated by the design of this building, so much so that you decide to look around a bit more\
                before escaping the cold. Bad move. As you are exploring, icicles fall from the castle, impaling you. You\
                die hungry and cold. Go back a step, or start over.',
        options:[
            {
                text: 'Go back',
                nextText: 2,
                confetti:0
            },
            {
                text: 'Start over',
                nextText:0,
                confetti:0
            }
        ],
        img: '<img src ="https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iDskw5GhwrTc/v0/1200x774.jpg" alt="Icicles hanging off the roof in the dark" width=300 height=300></img>' 
    },
    {
        id: 7,
        text: 'You decide to go up the left staircase. Breathing heavily, you hope you find kind people\
               on the other side of the door. You\'d really just like to go home and have that breakfast.\
               As you open the door, your hopes are dashed. Instead, you are faced with a dark tunnel. You use your\
               phone as a flashlight, which thankfully still works in this place. You march along, each footstep\
               echoing. Soon you hear a noise. At the end of the tunnel is a man, imprisoned. He begs you for help,\
               explaining that he will be used for bait for an evil monster unless you free him. Do you try and help\
               him escape, or keep moving down the tunnel?',
        options: [
            {
                text: 'Help him escape',
                nextText: 10,
                confetti:0
            },
            {
                text: 'Keep moving',
                nextText: 11,
                confetti:0
            }
        ],
        img: '<img src= "https://media.newyorker.com/photos/590967ad019dfc3494ea0e7f/master/w_2560%2Cc_limit/120130_r21816_g2048.jpg" alt="person imprisoned" width =300 height=200></img>'

    },
    {
        id: 8,
        text: 'To the basement you go. You decide to take the descending, middle staircase. You creep down, each footstep\
                seemingly louder than the last. You open the door at the bottom, hoping for a godsend. Instead, you find the\
                opposite - a ghost! The ghost possesses you and steals your soul. Spooky. Go back a step, or start over.',
        options: [
            {
                text: 'Go back',
                nextText:5,
                confetti:0
            },
            {
                text: 'Start over',
                nextText:0,
                confetti:0
            }
        ],
        img: '<img src= "ghost.png" alt="picture of a ghost!" width=300 height=300></img>'

    },
    {   id: 9,
        text: 'You decide to climb the right staircase. You get to the top and open the door. Behind the door is a\
                puzzling scene, adding to your already puzzling day. Sitting at a kitchen table are the likes of George\
                Washington, Cleopatra, Leonardo da Vinci, and Winston Churchill. Mary Shelley offers you a seat. Do you\
                accept, or insist on returning home?',
        options:[
            {
                text: 'Accept',
                nextText: 14,
                confetti:0
            },
            {
                text: 'Insist on leaving',
                nextText: 15
            }
        ],
        img: '<img src= "washington_cleopatra.png" alt="Picture of George Washigton and Cleopatra looking at each other" width=300 height=300></img>'


    },
    {
        id:10,
        text: 'You decide to help him. Luckily, there is a key on the wall opposite the jail cell. You free him\
               just in time for the both of you to escape the hidden monster, and continue walking through the tunnel.\
               As a reward for helping him, he answers your questions about this mysterious place. He explains that you \
               have time travelled to 12th century England, to a castle famous for luring people from all across time\
               and space to help feed the monster in the tunnel. He is actually from second century Rome.\
               He explains that the time machine to return home is in the\
               tower, just a few yards away from where you are now. Unfortunately, the time machine can only send one person,\
               so he challenges you to a fight to the death. Do you accept, or try and race him to the tower?',
        options:[
            {
                text: 'Accept',
                nextText: 12,
                confetti: 1
            },
            {
                text: 'Run!',
                nextText: 13
            }
        ],
        img: '<img src="angry_roman.png" alt="Angry Roman" width=300 height=300></img>'
    },
    {
        id: 11,
        text: 'You decide not to help the imprisoned man. You have enough problems as is. Trudging along, you hope to find\
               something that will help you return home. Instead, you find the evil monster you were warned about. You try to\
               run, but to no avail. The monster eats you and you die. Go back a step, or start over.',
        options:[
            {
                text: 'Go back',
                nextText: 7
            },
            {
                text: 'Start over',
                nextText:0
            }
        ],
        img: '<img src= "monster.png" alt="Picture of scary monster" width=300 height=300></img>'
    },
    {
        id:12,
        text: 'You decide to fight your new friend, and it pays off. Though you are sad to watch him die, you perk up\
            when you reach the tower and find a time machine. Within a few moments, you have configured the contraption\
            to ship you back home. You arrive back in your kitchen just a few minutes after you left, and finally make yourself\
            a hearty breakfast.',
        options: [
            {
                text: 'Play again',
                nextText: 0,
                confetti:2
            }

        ],
        img: '<img src="time_machine.png" alt="person walk into time machine" width=300 height=300></img>'
    },
    {
        id: 13,
        text: 'You decide not to fight and make a break for it. Unfortunately, the Roman seems a bit faster than you.\
                He catches up to you before you can get to the tower, and kills you. You curse the Roman empire as you die. Go\
                back a step, or start over.',
        options:[
            {
                text: 'Go back',
                nextText:10
            },
            {
                text: 'Start over',
                nextText:0
            }
        ],
        img: '<img src="roman_time_machine.png" alt="Picture of Roman walking into time machine" width=300 height=300></img> '
    },
    {
        id:14,
        text: 'Your hunger gets the best of you, and you accept their offer. After a delicious meal, they explain to you\
                that you have travelled through time to 12th century England, to a famous castle where all time travellers\
                reside. They offer to help you if you tell them about the 21st century. Do you accept their help?',
        options:[
            {
                text:'Accept their help and tell them about the future',
                nextText: 16,
                confetti:1
            },
            {
                text: 'Deny their help and keep the future a secret',
                nextText: 17
            }
        ], 
        img: '<img src= "castle_table.png" alt="Picture of food" width=300 height=300></img> '
    },
    {
        id:15,
        text: 'You thank them for their offer, but refuse. Julius Caesar perceives this as an insult to his cooking.\
                Enraged, he stabs you. Go back a step, or start over.',
        options:[
            {
                text: 'Go back',
                nextText:9
            },
            {
                text: 'Start over',
                nextText:0
            }
        ],
        img: '<img src= "caesar.png" alt ="Julius Caesar angry" width=300 height=300></img> '
    },
    {
        id:16,
        text: 'You humbly accept their help, and tell them all about your time. \
            They bring you to the tower of the castle, where a time machine sits. With help\
                from some of Earth\'s brightest figures, you return home.',
        options:[
            {text: 'Play again',
            nextText:0,
            confetti:2
        }
        ],
        img: '<img src= "time_machine.png" width=300 height=300></img> '
    },
    {
        id:17,
        text: 'You deny them any future knowledge. What if it changes the past? Well, it seems like you won\'t have to worry\
                about that. The group angrily tosses you out into the cold, where you freeze to death. Go back, or start over. ',
        options:[
            {
                text: 'Go back',
                nextText: 14
            },
            {
                text: 'Start over',
                nextText: 0
            }
        ],
        img:'<img src="freezing_person_vangogh.png" alt="Picture of person shivering" width=300 height=300></img>'
    },
    {

        id: 18,
        text: 'You decide to press the green one. Suddenly, you hear a rush of air. You turn to look at the source of the noise.\
                From behind you, three creatures step out of an airlock. Eventually, they are able to communicate to you\
                that they are hungry. You notice a small package with food in it. Then you remember you never ate breakfast.\
                Do you give them the food, or eat it yourself?',
        options:[
            {
                text:'Give it to them',
                nextText: 21
            },
            {
                text:'Keep it',
                nextText: 22
            }
        ],
        img:'<img src="https://64.media.tumblr.com/0f900c024bc409cacecef7c800b35121/tumblr_p8uaz6aAP11x6m6njo1_1280.jpg" alt="Jeff Goldblum, Jim Carrey, and Damon Wayans from Earth Girls Are Easy" width=300 height=200></img> '        
    },
    {
        id:19,
        text:'You decide to press the red button. At first, nothing happens. Then, an alarm goes off. Before you can react, the\
            ceiling above you opens and ejects you from the ship. You die in the harsh, unforgiving elements of space. Go back a step\
            or start over.',
        options:[
            {
                text:'Go back',
                nextText:3

            },
            {
                text:'Start over',
                nextText:0
            }
        ],
        img:'<img src="dead_in_space.png" alt="Picture of person floating in space" width=300 height=300></img>'
    },
    {
        id:21,
        text:'You decide to be nice and give them the food. They soon become more energetic, and take over piloting the ship.\
            They explain that you must have stumbled upon a time machine, and landed on their ship, thousands of years in the future.\
            They offer to send you home, if you tell them what Earth is like. Do you share your knowledge with them, or refuse?',
        options:[
            {
                text:'Share',
                nextText:23,
                confetti:1
            },
            {
                text:'Refuse',
                nextText: 24
            }
        ],
        img:'<img src="https://jo-blog.s3-eu-west-1.amazonaws.com/medium_1b27a28f-c8e5-4e73-a006-0c4e3bd5f40c.jpg" alt= "Spaceship from Earth Girls are Easy" width=300 height=200></img>'
    },
    {
        id:22,
        text: 'You keep the food for yourself. The aliens are sad, but not angry. With relief, you eat your food. Suddenly, though,\
                you realize it is not human food. Soon you don\'t feel well. The alien food is poisonous, and you die. Go back a step, or start over.',

        options:[
            {
                text:'Go back',
                nextText:18
            },
            {
                text:'Start over',
                nextText:0
            }
        ],
        img: '<img src="poison.png" alt="Picture of poisonous food" width=300 height=300></img>'
               
    },
    {
        id:23,
        text:'These guys seem nice, so you decide to share your knowledge. You tell them all about Earth, both past and present.\
            Fascinated, they thank you. They help you manuever the time machine and send you back to your home.',
        options:[
            {
                text:'Play again',
                nextText:0,
                confetti:2
            }
        ],
        img: '<img src="https://www.eightieskids.com/wp-content/uploads/2020/03/maxresdefault-1-5-e1597759051977.jpg" width=250 height=200></img>'
    },
    {
        id:24,
        text:'You explain that you don\'t feel like you should tell them about Earth. They are hurt that\
            you do not trust them. You feel so guilty that you tell them they don\'t need to help you with the time machine,\
            and you accidentally set the machine to drop you in the ocean. You drown. Go back a step, or start over.',
        options:[
            {
                text:'Go back',
                nextText:21
            },
            {
                text:'Start over',
                nextText:0
            }
        ],
        img: '<img src="drowning_man.png" alt="Picture of person flailing in the ocean" width=300 height=300></img>'
    },
    {
        id:20,
        text:'You decide to press the blue button. The ship begins racing through space and lands on an alien planet. From\
            a screen in front of you, you deduce that it is safe to go outside. You debate exploring the planet, or staying put and \
            figuring out a way to get home. Which will you decide?',
        options:[
            {
                text:'Look for food',
                nextText:25
            },
            {
                text:'Stay on the ship',
                nextText: 26
            },
            {
                text: 'Explore the planet',
                nextText: 27
            }
        ],
            img: '<img src="spaceship_landed_snow.png"  alt= "Picture of spaceship on alien planet" width=300 height=300> </img>'
        
    },
    {
        id:25,
        text:'You decide to look for food. As you trudge through the snow, you hear a noise. You turn to look, and come \
            face to face with an alien. He uses a translator to tell you that you are in danger, and should follow him. \
            Will you?',
        options:[
            {
                text:'Follow the alien',
                nextText:28
            },
            {
                text: 'Ignore him',
                nextText:29
            }
        ],
        img: '<img src= "alien.png" alt="Picture of alien" width=300 height=300></img>'
    },
    {
        id:26,
        text:'You decide to stay put and explore the ship, hoping to find a way home. You attempt to fly the ship back\
            into space, and crash into a mountain. Go back a step, or start over.',
        options:[
            {
                text: 'Go back',
                nextText:20
            },
            {
                text:'Start over',
                nextText:0
            }
        ],
        img: "<img src= 'spaceship_crashing.png' alt='Picture of spaceship crashing' width=300 height=300></img>"
    },
    {
        id:27,
        text:'You decide to explore the planet. While taking in the gorgeous views of the snowy environment, you\
        discover an alien. He communicates to you that you are in grave danger. Do you follow him, or ignore him?',
        options:[
            {
                text: 'Follow him',
                nextText:28,
            },
            {
                text:'Ignore him',
                nextText:29
            }
        ],
        img:'<img src="alien.png" alt="Picture of an alien" width=300 height=300></img>'
    },
    {
        id:28,
        text:'You decide to trust the alien and follow him. He takes you to an underground lair and explains that \
            they are at war with another group. You explain that you are not from here, and need help getting home. \
            He promises to help if you help his city prepare for battle. How do you respond?',
        options:[
            {
                text:'Help them',
                nextText:30
            },
            {
                text:'Refuse',
                nextText:31
            }
        ],
        img:'<img src= "alien_lair.png" alt= "Picture of alien lair" width=300 height=300></img>'
    },
    {
        id:29,
        text:'You thank the alien for the warning, but are skeptical. You refuse to follow him. Soon after, \
            a different group of aliens attacks you. You die, becoming the first human to die on another planet. To change\
            that, go back or start over.',
        options:[
            {
                text:'Go back',
                nextText:25
            },
            {
                text:'Start over',
                nextText:0
            }
        ],
        img:'<img src= "alien_attacking_human.png" alt="Picture of aliens attacking a human" width=300 height=300></img>'
    },
    {
        id:30,
        text: 'You offer your help, which the aliens graciously accept. They put you to work. Halfway through the\
            day, an announcment is made that the enemies are starting to attack. Panic ensues, and, while trying to help,\
            you notice a key piece of equipment is turned off. Do you switch it on, notify someone, or ignore it?',
        options:[
            {
                text:'Switch it on',
                nextText:32,
                confetti:1
            },
            {
                text:'Notify someone',
                nextText:33,
                confetti:1
            },
            {
                text:'Ignore it',
                nextText:34
            }
        ],
        img:'<img src= "aliens_panic.png" alt="Picture of scared aliens" width=300 height=300></img>'
    },
    {
        id:31,
        text:'You refuse to help; you\'ve got enough problems as it is. Worried that you might be a spy,\
            the alien throws you in prison. You think you can reach the key if you reach between the bars,\
            but there is a guard sitting just a few feet away. What do you do?',
        options:[
            {
                text: 'Try to escape', 
                nextText:35,
                confetti:1
            },
            {
                text:'Stay in prison',
                nextText:36
            }
        ],
        img:'<img src= "alien_prison_guard.png" alt= "Picture of alien prison guard" width=300 height=300></img>'
    },
    {
        id:32,
        text:'You flip the switch on. Your keen awareness wins you and your new friends the battle. The aliens\
            explain that you were accidentally transported to their planet, but they are grateful that you were there\
            to help them win. They send you back to your home.',
        options:[
            {
                text: "Play again",
                nextText:0,
                confetti:2
            }
        ],
        img: '<img src="aliens_cheering.png" alt="Picture of aliens cheering" width=300 height=300></img>' 
    },
    {
        id: 33,
        text: 'Nervous you are wrong, you get your alien friend\'s attention to flip the switch. Your awareness \
            turns the machine on and helps win the battle. The aliens\
            explain that you were accidentally transported to their planet, but they are grateful that you were there\
            to help them win. They send you back to your home.',
        options:[
            {
                text: "Play again",
                nextText:0,
                confetti:2
            }
        ],
        img: '<img src="aliens_cheering.png" alt="Picture of aliens cheering" width=300 height=300></img>'
    },
    {
        id: 34,
        text: 'You ignore your instincts to flip the switch on the machine, and leave it turned off. Bad idea. \
        That machine could have won you and your friends the battle, but since it was off, you lost and were killed. \
        Go back, or start over.',
        options:[
            {
                text:'Go back',
                nextText:30
            },
            {
                text:'Start over',
                nextText:0
            }
        ],
        img: '<img src="alien_war.png" alt="Picture of aliens losing battle" width=300 height=300></img>'
    },
    {
        id:35,
        text:'You try your luck at escaping, and succeed. The guard never even notices you are gone. You make it back to your spaceship,\
        and discover a replica of the box that was in your kitchen. This time, you push the lever forward, and you \
            are transported home.',
        options:[
            {
                text:'Play again',
                nextText:0,
                confetti:2
            }
        ],
        img: '<img src= "escape_alien_prison.png" alt="Picture of person entering spaceship" width=300 height=300></img>'
    },
    {
        id:36,
        text:'Scared the guard might see you, you stay in your cell. Without your help, the aliens lose the battle, \
        and you are killed by the blood-thirsty enemy. Go back, or start over.',
        options:[
            {
                text:'Go back',
                nextText:31
            },
            {
                text: 'Start over',
                nextText:0
            }
        ],
        img: '<img src="bad_aliens_win.png" alt="Picture of aliens winning battle" width=300 height=300></img>'
    }
]
start()
