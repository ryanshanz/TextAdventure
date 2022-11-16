// Ryan Shanz
// Text Adventure Code
//
//don't forget - change font


const textShown= document.getElementById("text")
const buttons= document.getElementById("options")
const image= document.getElementById("img")

let text2 = 'Also sprach Zarathustra'

function start(){
    showText(1)
}
// textNode = the big_text_node item that correlates with the id passed in (text_node_id)
// then textShown = the textNode text.

function showText(text_node_id){
    const textNode = big_text_node.find(textNode => textNode.id === text_node_id)
   
    textShown.innerHTML = textNode.text
    image.innerHTML = textNode.img





// needed help below
    while(buttons.firstChild) {
        buttons.removeChild(buttons.firstChild)
    }

// forEach option in options, create button, print button text, execute functions for clicking -- needed help with that part.
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
    if (nextText_Id == 0){
        start()
    }
    else{
        showText(nextText_Id)
    }
}



const big_text_node = [

    {
        id:1,
        text: 'You wake up in your bed, like usual, unaware of the unusual events that are about to transpire.\
               Hungry, you walk to the kitchen, salivating at the thought of a big breakfast on this Sunday morning.\
               Before you can make that, though, you notice a strange object in the middle of the room. The object is\
               a box, with a lever sticking vertically from the center. Arrows on the side of the box point forward\
               and backward, indicating the directions of the lever. You are intrigued, but hungry. Do you push the\
               lever forward, pull it backward, or make breakfast?',
        options: [
            {
                text: 'Push forward',
                nextText: 2
            }, 
            {
                text: 'Pull backward',
                nextText: 3
            },   
            {
                text: 'Ignore the item and eat',
                nextText:4
            }
            
        ],
        img: '<img src ="https://m.media-amazon.com/images/I/71xedIZEwdL._AC_SL1500_.jpg" height=200 width=200></img>'
    },    
    {
        //id 2, 5-17 is 'push forward' subtree
        id:2,
        text: 'You decided to push the lever forward. Instantly, you are shivering. Before you even know it, you\
                have been transported to a snowy, windy mountain top. Somehow, it is night. The darkness looms over you,\
                but light coming from various windows illuminate a gigantic building in front of you - a castle. The\
                gorgeous architecture leaves you in awe, but the gusting winds leaves you freezing. Do you explore the\
                outside of the castle some more, or walk in the menacing front doors?',
        options:[
            {
                text: 'Enter',
                nextText:5
            },
            {
                text:'Explore',
                nextText:6
            }
        ],
        img: '<img src="https://openailabsprodscus.blob.core.windows.net/private/user-6v71VdrL3QpoBhTjWcxqTmZ4/generations/generation-19Ch71HciA3VQDupW3SgR7Ju/image.webp?st=2022-11-15T17%3A45%3A42Z&se=2022-11-15T19%3A43%3A42Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/webp&skoid=15f0b47b-a152-4599-9e98-9cb4a58269f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2022-11-15T16%3A55%3A36Z&ske=2022-11-22T16%3A55%3A36Z&sks=b&skv=2021-08-06&sig=gTDeb/qGVWs0D7zxdWZ5WTMtjvNtyNAt9Hma5Hr1LuA%3D" alt= "photo of person sitting outside a castle in the snow        " height=200 width=200></img>'
    },  
    {
        id: 3,
        text: 'You decide to pull the lever backwards. Instantly, you are transported to an alien environment. As your\
                eyes adjust, you realize you are on a spaceship. The song ' + text2.italics() + ' plays somewhere in the background.\
                You see three buttons in front of you - a green one, a red one, and a blue one. Which one do you press?',
        options:[
            {
            text: 'Green',
            nextText:18
            },
            {
                text: 'Red',
                nextText: 19
            },
            {
                text: 'Blue',
                nextText: 20
            }
        ],
        img: '<img src="https://openailabsprodscus.blob.core.windows.net/private/user-6v71VdrL3QpoBhTjWcxqTmZ4/generations/generation-TgaL6KjSesv1AhWLcb6wVEam/image.webp?st=2022-11-15T17%3A45%3A42Z&se=2022-11-15T19%3A43%3A42Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/webp&skoid=15f0b47b-a152-4599-9e98-9cb4a58269f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2022-11-15T16%3A55%3A36Z&ske=2022-11-22T16%3A55%3A36Z&sks=b&skv=2021-08-06&sig=08DefXN0PYSl7kWWl3/OJ4uez3QuvpxeJdpkK7waj1I%3D" alt="Person sitting at the controls of a spaceship" width=200 height=200></img>'
    },
    // id 4 is 'do nothing' subtree
    {
        id: 4,
        text: 'Your breakfast was so good that you choked on it and died. Start over.',
        options:[
            {
                text:'Start over',
                nextText: 0
            }
       ],
       img: '<img src="https://openailabsprodscus.blob.core.windows.net/private/user-6v71VdrL3QpoBhTjWcxqTmZ4/generations/generation-LU1EgRjocr8oQdKDr6jWQZwX/image.webp?st=2022-11-15T17%3A45%3A42Z&se=2022-11-15T19%3A43%3A42Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/webp&skoid=15f0b47b-a152-4599-9e98-9cb4a58269f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2022-11-15T16%3A55%3A36Z&ske=2022-11-22T16%3A55%3A36Z&sks=b&skv=2021-08-06&sig=GBlmx9glCjNoTVrggJW2jShxVNLrr151v/TZ1jxNXdM%3D" alt= "Person sad eating food" width =200 height=200></img>'
    },
    {
        id: 5,
        text: 'You decided to enter the castle. With all your weight pushed up against the concrete doors,\
               you manage to make your way inside. The entry is a sight to behold. In front of you are two\
               parallel sets of stairs, both going up and leading to two separate doors. In between those staircases\
               is a descending one. Which direction will you walk?',
        options:[
            {
                text: 'Left',
                nextText: 7
            },
            {
                text: 'Middle',
                nextText: 8
            },
            {
                text: 'Right',
                nextText: 9
            }
        ],
        img: '<img src="https://t3.ftcdn.net/jpg/03/53/63/74/360_F_353637419_FO560joWugRH1YzuvbSTXDzFPZd88CdD.jpg" alt="Castle with three staircases" width=200 height=200></img>'
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
            },
            {
                text: 'Start over',
                nextText:0
            }
        ],
        img: '<img src ="https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iDskw5GhwrTc/v0/1200x774.jpg" alt="Icicles hanging off the roof in the dark" width=200 height=200></img>' 
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
                nextText: 10
            },
            {
                text: 'Keep moving',
                nextText: 11
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
                nextText:5
            },
            {
                text: 'Start over',
                nextText:0
            }
        ],
        img: '<img src= "https://openailabsprodscus.blob.core.windows.net/private/user-6v71VdrL3QpoBhTjWcxqTmZ4/generations/generation-eqiDBuhtOkoWBCMTmwy1S699/image.webp?st=2022-11-15T16%3A17%3A26Z&se=2022-11-15T18%3A15%3A26Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/webp&skoid=15f0b47b-a152-4599-9e98-9cb4a58269f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2022-11-15T10%3A33%3A21Z&ske=2022-11-22T10%3A33%3A21Z&sks=b&skv=2021-08-06&sig=C7hFg14PAyBCnjancNP51nIv0lGvfbIXHSHV3spMo3g%3D" alt="picture of a ghost!" width =200 height=200></img>'

    },
    {   id: 9,
        text: 'You decide to climb the right staircase. You get to the top and open the door. Behind the door is a\
                puzzling scene, adding to your already puzzling day. Sitting at a kitchen table are the likes of George\
                Washington, Cleopatra, Leonardo da Vinci, and Winston Churchill. Mary Shelley offers you a seat. Do you\
                accept, or insist on returning home?',
        options:[
            {
                text: 'Accept',
                nextText: 14
            },
            {
                text: 'Insist on leaving',
                nextText: 15
            }
        ],
        img: '<img src= "https://openailabsprodscus.blob.core.windows.net/private/user-6v71VdrL3QpoBhTjWcxqTmZ4/generations/generation-EX0ywTBy8tLuXgZyPEWWTmY6/image.webp?st=2022-11-15T17%3A45%3A39Z&se=2022-11-15T19%3A43%3A39Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/webp&skoid=15f0b47b-a152-4599-9e98-9cb4a58269f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2022-11-15T15%3A20%3A45Z&ske=2022-11-22T15%3A20%3A45Z&sks=b&skv=2021-08-06&sig=6frP3iuhz6MA9CKPwKyMnjggPHqq8F9/zPAZPRaVuwY%3D" alt="Picture of George Washigton and Cleopatra looking at each other" width=200 height=200></img>'


    },
    {
        id:10,
        text: 'You decide to help him. Luckily, there is a key on the wall opposite the jail cell. You free him\
               just in time for the both of you to escape the hidden monster, and continue walking through the tunnel.\
               As a reward for helping him, he answers your questions about this mysterious place. He explains that you \
               have time travelled to 12th century England. This castle is famous for luring people from all across time\
               and space to help feed the monster in the tunnel. He is actually from second century Rome.\
               He explains that the time machine to return home is in the\
               tower, just a few yards away from where you are now. Unfortunately, the time machine can only send one person,\
               so he challenges you to a fight to the death. Do you accept, or try and race him to the tower?',
        options:[
            {
                text: 'Accept',
                nextText: 12
            },
            {
                text: 'Run!',
                nextText: 13
            }
        ],
        img: '<img src="https://openailabsprodscus.blob.core.windows.net/private/user-6v71VdrL3QpoBhTjWcxqTmZ4/generations/generation-gdeYFbIqphbfAPe7YxIQJCWr/image.webp?st=2022-11-15T16%3A17%3A26Z&se=2022-11-15T18%3A15%3A26Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/webp&skoid=15f0b47b-a152-4599-9e98-9cb4a58269f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2022-11-15T10%3A33%3A21Z&ske=2022-11-22T10%3A33%3A21Z&sks=b&skv=2021-08-06&sig=si6YTYHc8jWKyBjipnYKzVJTzf0n5jRlWl7yWcEmB6k%3D" alt="Angry Roman" width=200 height =200></img>'
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
        img: '<img src= "https://openailabsprodscus.blob.core.windows.net/private/user-6v71VdrL3QpoBhTjWcxqTmZ4/generations/generation-e7avYjDMDtF0pVRXJOFR9iih/image.webp?st=2022-11-15T17%3A45%3A39Z&se=2022-11-15T19%3A43%3A39Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/webp&skoid=15f0b47b-a152-4599-9e98-9cb4a58269f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2022-11-15T15%3A20%3A45Z&ske=2022-11-22T15%3A20%3A45Z&sks=b&skv=2021-08-06&sig=J0n8ZLSd8xqYNYd8BjHCB82CrMaZbw7oJHVLUy0jgto%3D" alt="Picture of scary monster" width=200 height=200></img>'
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
                nextText: 0
            }

        ],
        img: '<img src="https://openailabsprodscus.blob.core.windows.net/private/user-6v71VdrL3QpoBhTjWcxqTmZ4/generations/generation-4uP0KUgB1aLCQ41gScCZMT40/image.webp?st=2022-11-15T16%3A17%3A26Z&se=2022-11-15T18%3A15%3A26Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/webp&skoid=15f0b47b-a152-4599-9e98-9cb4a58269f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2022-11-15T10%3A33%3A21Z&ske=2022-11-22T10%3A33%3A21Z&sks=b&skv=2021-08-06&sig=FDwK0WILocPu60C6S3kYW6o7umaUH0z1Z0kikmkSJ8A%3D" width=200 height=200></img>'
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
        img: '<img src="https://openailabsprodscus.blob.core.windows.net/private/user-6v71VdrL3QpoBhTjWcxqTmZ4/generations/generation-923UrqKjbg5NLE4FxKboKQ5u/image.webp?st=2022-11-15T17%3A45%3A22Z&se=2022-11-15T19%3A43%3A22Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/webp&skoid=15f0b47b-a152-4599-9e98-9cb4a58269f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2022-11-15T16%3A51%3A49Z&ske=2022-11-22T16%3A51%3A49Z&sks=b&skv=2021-08-06&sig=0%2BlDFC7p0LgC1Xx440Gn3LTT77uGrAYoyDyzQA6oNTI%3D" alt="Picture of Roman walking into time machine" width=200 height=200></img> '
    },
    {
        id:14,
        text: 'Your hunger gets the best of you, and you accept their offer. After a delicious meal, they explain to you\
                that you have travelled through time to 12th century England, to a famous castle where all time travellers\
                reside. They offer to help you if you tell them about the 21st century. Do you accept their help?',
        options:[
            {
                text:'Accept their help and tell them about the future',
                nextText: 16
            },
            {
                text: 'Deny their help and keep the future a secret',
                nextText: 17
            }
        ], 
        img: '<img src= "https://openailabsprodscus.blob.core.windows.net/private/user-6v71VdrL3QpoBhTjWcxqTmZ4/generations/generation-io1AD8vCBbIkZDIAvgyhU8hX/image.webp?st=2022-11-15T17%3A45%3A22Z&se=2022-11-15T19%3A43%3A22Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/webp&skoid=15f0b47b-a152-4599-9e98-9cb4a58269f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2022-11-15T16%3A51%3A49Z&ske=2022-11-22T16%3A51%3A49Z&sks=b&skv=2021-08-06&sig=7ajvFfn8PlqnVCwC5jWrQyPsickgIvu%2B27eh9TGYdpk%3D" alt="Picture of Winston Churchill" width=200 height=200></img> '
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
        img: '<img src= "https://openailabsprodscus.blob.core.windows.net/private/user-6v71VdrL3QpoBhTjWcxqTmZ4/generations/generation-jT9mYZrjkhkjYXqFwxKGjXhj/image.webp?st=2022-11-15T17%3A45%3A39Z&se=2022-11-15T19%3A43%3A39Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/webp&skoid=15f0b47b-a152-4599-9e98-9cb4a58269f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2022-11-15T15%3A20%3A45Z&ske=2022-11-22T15%3A20%3A45Z&sks=b&skv=2021-08-06&sig=li/c2yBb/Pd%2BO5IwpUVglD5khy7jbRz2vmfnU51AWxA%3D" alt ="Julius Caesar angry" width=200 height=200></img> '
    },
    {
        id:16,
        text: 'You humbly accept their help. They bring you to the tower of the castle, where a time machine sits. With help\
                from some of Earth\'s brightest figures, you return home.',
        options:[
            {text: 'Play again',
            nextText:0
        }
        ],
        img: '<img src= "https://openailabsprodscus.blob.core.windows.net/private/user-6v71VdrL3QpoBhTjWcxqTmZ4/generations/generation-4uP0KUgB1aLCQ41gScCZMT40/image.webp?st=2022-11-15T16%3A17%3A26Z&se=2022-11-15T18%3A15%3A26Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/webp&skoid=15f0b47b-a152-4599-9e98-9cb4a58269f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2022-11-15T10%3A33%3A21Z&ske=2022-11-22T10%3A33%3A21Z&sks=b&skv=2021-08-06&sig=FDwK0WILocPu60C6S3kYW6o7umaUH0z1Z0kikmkSJ8A%3D" width=200 height=200></img> '
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
        img:'<img src="https://openailabsprodscus.blob.core.windows.net/private/user-6v71VdrL3QpoBhTjWcxqTmZ4/generations/generation-ZKCR6Zg6PpfjHq0Ll5udu2DR/image.webp?st=2022-11-15T17%3A45%3A22Z&se=2022-11-15T19%3A43%3A22Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/webp&skoid=15f0b47b-a152-4599-9e98-9cb4a58269f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2022-11-15T16%3A51%3A49Z&ske=2022-11-22T16%3A51%3A49Z&sks=b&skv=2021-08-06&sig=8jlJj6G8w/LHAH6teDBXwEvueO0MJ6KHFUN%2BGhl%2Bv6w%3D" alt="Picture of person shivering" width=200 height=200></img>'
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
        img:'<img src="https://undressinglife.files.wordpress.com/2013/12/gravity-2013-dvdscr-xvid-ac3-millenium-avi_snapshot_00-21-11_2013-12-10_19-33-56.jpg" alt="Dead guy from Gravity" width=400 height=200></img>'
    },
    {
        id:21,
        text:'You decide to be nice and give them the food. They soon become more energetic, and take over piloting the ship.\
            They explain that you must have stumbled upon a time machine, and landed on their ship, thousands of years in the future.\
            They offer to send you home, if you tell them what Earth is like. Do you share your knowledge with them, or refuse?',
        options:[
            {
                text:'Share',
                nextText:23
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
        img: '<img src="https://openailabsprodscus.blob.core.windows.net/private/user-6v71VdrL3QpoBhTjWcxqTmZ4/generations/generation-45ku9tAgl7560cyKyVYwe6zd/image.webp?st=2022-11-15T17%3A45%3A22Z&se=2022-11-15T19%3A43%3A22Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/webp&skoid=15f0b47b-a152-4599-9e98-9cb4a58269f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2022-11-15T16%3A51%3A49Z&ske=2022-11-22T16%3A51%3A49Z&sks=b&skv=2021-08-06&sig=EUcfljgYFs5tPOV8G3pgctQCay1jausXtgu59zQMcVA%3D" alt="Picture of poisonous food" width=200 height=200></img>'
               
    },
    {
        id:23,
        text:'These guys seem nice, so you decide to share your knowledge. You tell them all about Earth, both past and present.\
            Fascinated, they thank you. They help you manuever the time machine and send you back to your home. Press start over to\
            play again.',
        options:[
            {
                text:'Start over',
                nextText:0
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
        img: '<img src="https://openailabsprodscus.blob.core.windows.net/private/user-6v71VdrL3QpoBhTjWcxqTmZ4/generations/generation-BTuTjZfCYiIEiqOflr6b3y3r/image.webp?st=2022-11-15T17%3A45%3A22Z&se=2022-11-15T19%3A43%3A22Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/webp&skoid=15f0b47b-a152-4599-9e98-9cb4a58269f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2022-11-15T16%3A51%3A49Z&ske=2022-11-22T16%3A51%3A49Z&sks=b&skv=2021-08-06&sig=YeApm6POuBQRlhCQjGeNs05%2BGTjk4Kx5w7lg9/C8AnA%3D" alt="Picture of person flailing in the ocean" width =200 height=200></img>'
    },
    {
        id:20,
        text:''
    }
    
]
start()
