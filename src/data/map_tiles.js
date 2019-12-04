import tiles from './tile.js';
import player from './player.js'
import map from './game_map.js'

var areas = {
    a1:
        {
            name: "a1",
            tile_type: tiles.tile[2],
            eventCompleted: false,
            event: function() {
                //alert("d1 event triggered!")
                if (!this.eventCompleted) {
                    var eventString = 
                    `If you can read this we are wizards.
                    `;
                    document.querySelector(".eventInfo").innerHTML = eventString;
                    this.eventCompleted= true;
                }
            }
        },
            
    a2: 
        {
            name: "a2",
            tile_type: tiles.tile[0],
            eventCompleted: false,
            event: function() {
                //alert("d1 event triggered!")
                if (!this.eventCompleted) {
                    var eventString = 
                    `If you can read this we are wizards.
                    `;
                    document.querySelector(".eventInfo").innerHTML = eventString;
                    this.eventCompleted= true;
                }
            }
        },
    a3:
        {
            name: "a3",
            tile_type: tiles.tile[0],
            eventCompleted: false,
            event: function() {
                //alert("d1 event triggered!")
                if (!this.eventCompleted) {
                    var eventString = 
                    `If you can read this we are wizards.
                    `;
                    document.querySelector(".eventInfo").innerHTML = eventString;
                    this.eventCompleted= true;
                }
            }
        },
    a4:
        {
            name: "a4",
            tile_type: tiles.tile[0],
            eventCompleted: false,
            event: function() {
                //alert("d1 event triggered!")
                if (!this.eventCompleted) {
                    var eventString = 
                    `If you can read this we are wizards.
                    `;
                    document.querySelector(".eventInfo").innerHTML = eventString;
                    this.eventCompleted= true;
                }
            }
            
        },
    a5:
        {
            name: "a5",
            tile_type: tiles.tile[2],
            eventCompleted: false,
            event: function() {
                //alert("d1 event triggered!")
                if (!this.eventCompleted) {
                    var eventString = 
                    `If you can read this we are wizards.
                    `;
                    document.querySelector(".eventInfo").innerHTML = eventString;
                    this.eventCompleted= true;
                }
            }
            
        },
        // *************
    b1:
        {
            name: "b1",
            tile_type: tiles.tile[0],
            eventCompleted: false,
            event: function() {
                //alert("d1 event triggered!")
                if (!this.eventCompleted) {
                    var eventString = 
                    `If you can read this we are wizards.
                    `;
                    document.querySelector(".eventInfo").innerHTML = eventString;
                    this.eventCompleted= true;
                }
            }
        },
    b2:
        {
            name: "b2",
            tile_type: tiles.tile[2],
            eventCompleted: false,
            event: function() {
                //alert("d1 event triggered!")
                if (!this.eventCompleted) {
                    var eventString = 
                    `If you can read this we are wizards.
                    `;
                    document.querySelector(".eventInfo").innerHTML = eventString;
                    this.eventCompleted= true;
                }
            }
        },
    b3:
        {
            name: "b3",
            tile_type: tiles.tile[2],
            eventCompleted: false,
            event: function() {
                //alert("d1 event triggered!")
                if (!this.eventCompleted) {
                    var eventString = 
                    `If you can read this we are wizards.
                    `;
                    document.querySelector(".eventInfo").innerHTML = eventString;
                    this.eventCompleted= true;
                }
            }
        },
    b4:
        {
            name: "b4",
            tile_type: tiles.tile[1],
            eventCompleted: false,
            event: function() {
                //alert("d1 event triggered!")
                if (!this.eventCompleted) {
                    var eventString = 
                    `If you can read this we are wizards.
                    `;
                    document.querySelector(".eventInfo").innerHTML = eventString;
                    this.eventCompleted= true;
                }
            }
        },
    b5:
        {
            name: "b5",
            tile_type: tiles.tile[0],
            eventCompleted: false,
            event: function() {
                //alert("d1 event triggered!")
                if (!this.eventCompleted) {
                    var eventString = 
                    `If you can read this we are wizards.
                    `;
                    document.querySelector(".eventInfo").innerHTML = eventString;
                    this.eventCompleted= true;
                }
            }
        },
        // *************
    c1:
        {
            name: "c1",
            tile_type: tiles.tile[1],
            eventCompleted: false,
            event: function() {
                //alert("d1 event triggered!")
                document.querySelector(".eventInfo").innerHTML = 
                `You're in a dank swamp. It reeks of death, and to the north you see what looks like a graveyard.`;
            }
        },
    c2:
        {
            name: "c2",
            tile_type: tiles.tile[0],
            eventCompleted: false,
            event: function() {
                //alert("d1 event triggered!")
                document.querySelector(".eventInfo").innerHTML = 
                `To the north you see mountains, to the south a lake. This idyllic valley seems welcoming, but 
                seems completely void of animal life.`;
            }
        },
    c3:
        {
            name: "c3",
            tile_type: tiles.tile[0],
            eventCompleted: false,
            event: function() {
                //alert("d1 event triggered!")
                document.querySelector(".eventInfo").innerHTML = 
                `You can tell you're not the only one to travel this path. To south you see a small village.
                It looks far more appealing than the swamps to the east or mountains to the north.`;
            }
        },
    c4:
        {
            name: "c4",
            tile_type: tiles.tile[1],
            eventCompleted: false,
            event: function() {
                //alert("d1 event triggered!")
                if (!this.eventCompleted) {
                    var eventString = 
                    `If you can read this we are wizards.
                    `;
                    document.querySelector(".eventInfo").innerHTML = eventString;
                    this.eventCompleted= true;
                }
            }
        },
    c5:
        {
            name: "c5",
            tile_type: tiles.tile[1],
            eventCompleted: false,
            event: function() {
                //alert("d1 event triggered!")
                if (!this.eventCompleted) {
                    var eventString = 
                    `If you can read this we are wizards.
                    `;
                    document.querySelector(".eventInfo").innerHTML = eventString;
                    this.eventCompleted= true;
                }
            }
        },
        // *************
     d1:
        {
            name: "d1",
            tile_type: tiles.tile[0],
            eventCompleted: false,
            event: function() {
                //alert("d1 event triggered!")
                if (!this.eventCompleted) {
                    document.querySelector(".eventInfo").innerHTML = 
                    `<p>There is a lake to the East, and a man fishing lazily. He sees you and beckons you over.</p>
                    <button>Speak to the fisherman</button>
                    <p>    "There are no knights here anymore. No shortage of worms though."</p>
                    <p>He can tell you're confused, so he continues.</p>
                    <p>    "The land here is rotten, and the usurper here is the reason. He's been driven mad by old prophecies."</p>
                    <p>The man continues muttering as he goes back to fishing. You can't understand him anymore, so you leave him be.</p> 
                    `;
                    this.eventCompleted= true;
                }
                else {
                    document.querySelector(".eventInfo").innerHTML = "You think you can still hear the fisherman muttering to himself."
                }
            }
        },
    d2:
        {
            name: "d2",
            tile_type: tiles.tile[5],
            eventCompleted: false,
            event: function() {
                //alert("d1 event triggered!")
                if (!this.eventCompleted) {
                    var eventString = 
                    `If you can read this we are wizards.
                    `;
                    document.querySelector(".eventInfo").innerHTML = eventString;
                    this.eventCompleted= true;
                }
            }
        },
    d3:
        {
            name: "d3",
            tile_type: tiles.tile[3],
            eventCompleted: false,
            event: function() {
                //alert("d1 event triggered!")
                if (!this.eventCompleted) {
                    var eventString = 
                    `If you can read this we are wizards.
                    `;
                    document.querySelector(".eventInfo").innerHTML = eventString;
                    this.eventCompleted= true;
                }
            }
        },
    d4:
        {
            name: "d4",
            tile_type: tiles.tile[0],
            eventCompleted: false,
            event: function() {
                //alert("d1 event triggered!")
                if (!this.eventCompleted) {
                    var eventString = 
                    `If you can read this we are wizards.
                    `;
                    document.querySelector(".eventInfo").innerHTML = eventString;
                    this.eventCompleted= true;
                }
            }
        },
    d5:
        {
            name: "d5",
            tile_type: tiles.tile[0],
            eventCompleted: false,
            event: function() {
                //alert("d1 event triggered!")
                if (!this.eventCompleted) {
                    var eventString = 
                    `If you can read this we are wizards.
                    `;
                    document.querySelector(".eventInfo").innerHTML = eventString;
                    this.eventCompleted= true;
                }
            }
        },
        // *************
    e1:
        {
            name: "e1",
            tile_type: tiles.tile[0],
            eventCompleted: false,
            event: function() {
                //alert("e1 event triggered!")
                var eventString = 
                    `You're back where you started. But you can't turn back now!'
                    `;
                document.querySelector(".eventInfo").innerHTML = eventString;
            }
        },
    e2:
        {
            name: "e2",
            tile_type: tiles.tile[1],
            eventCompleted: false,
            event: function() {
                //alert("d1 event triggered!")
                if (!this.eventCompleted) {
                    document.querySelector(".eventInfo").innerHTML = 
                        `<p>While wading through the swamps you see massive rat. It's fangs are dripping with a pungent ooze.</p>
                        <p>Will you fight the rat or escape?</p>
                        <button id="option1">Fight</button>
                        <button id = "option2">Flee</button>`
                    document.querySelector(".eventInfo").innerHTML = eventString;
                    this.eventCompleted= true;
                }
            }
        },
    e3:
        {
            name: "e3",
            tile_type: tiles.tile[0],
            eventCompleted: false,
            event: function() {
                //alert("d1 event triggered!")
                if (!this.eventCompleted) {
                    var eventString = 
                    `If you can read this we are wizards.
                    `;
                    document.querySelector(".eventInfo").innerHTML = eventString;
                    this.eventCompleted= true;
                }
            }
        },
    e4:
        {
            name: "e4",
            tile_type: tiles.tile[0],
            eventCompleted: false,
            event: function() {
                if (!this.eventCompleted) {
                    var eventString = 
                    `As you are traveling you run into a weeping woman over a body on the side of the road.
                    She tells you that her husband was killed and her son was taken by bandits. She pleads
                    with you to help her...
                    `;
                    document.querySelector(".eventInfo").innerHTML = eventString;
                    this.eventCompleted= true;
                }else if(map[2][3].eventCompleted && !player.items.includes("key")){
                    var doneString =
                    `The woman thanks you and gives you a key to the monastery that her husband used to teach at. 
                    `;
                    player.items.push('key');
                    document.querySelector(".eventInfo").innerHTML = doneString;
                } else {
                    var compString = `This event is already completed`;
                    document.querySelector(".eventInfo").innerHTML = compString;
                }
            }
        },
    e5:
        {
            name: "e5",
            tile_type: tiles.tile[5],
            eventCompleted: false,
            event: function() {
                //alert("d1 event triggered!")
                if (!this.eventCompleted) {
                    var eventString = 
                    `If you can read this we are wizards.
                    `;
                    document.querySelector(".eventInfo").innerHTML = eventString;
                    this.eventCompleted= true;
                }
            }
        }
};

export default areas;