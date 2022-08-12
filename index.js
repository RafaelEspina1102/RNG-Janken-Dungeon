// Require the necessary discord.js classes
const { Client, GatewayIntentBits, GuildMember, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const { token } = require('./config.json');

// Create a new client instance
const client = new Client({ 
    intents: [
        GatewayIntentBits.Guilds
    ]
});

//enemies
const goblin_Enemy = {
    name: "goblin",
    health: 120,
    rock: 1,
    paper: 1,
    scissors: 3
}

const Demon_Lord_Waffles = {
    name: 'Demon Lord Waffles',
    health: 250,
    rock: 4,
    paper: 4,
    scissors: 4
}

const golem_Enemy = {
    name: "Golem",
    health: 150,
    rock: 3,
    paper: 1,
    scissors: 1
}

const ghost_Enemy = {
    name: "Ghost",
    health: 100,
    rock: 1,
    paper: 3,
    scissors: 1
}

//player
const player_Rock = {
    health: 120,
    rock: 3,
    paper: 1,
    scissors: 1
}

const player_Scissors = {
    health: 120,
    rock: 1,
    paper: 1,
    scissors: 3
}

const player_Paper = {
    health: 120,
    rock: 1,
    paper: 3,
    scissors: 1
}

// equipments
const gold = 25;
const breast_Plate = {
    name: 'Breast Plate',
    health: 30,
    gold: 75
}
const gold_Breast_Plate = {
    name: 'Gold Breast Plate',
    health: 80,
    gold: 200
}
const hammer = {
    name: 'Hammer',
    rock: 2,
    gold: 75
}
const book = {
    name: 'Book',
    paper: 2,
    gold: 75
}
const knife = {
    name: 'Knife',
    scissors: 2,
    gold: 75
};
    //ultimate weapon
const shogun_Katana = {
    name: "Shogun's Katana",
    rock: 4,
    paper: 4,
    scissors: 4,
    gold: 400
}
const none = {
    name: 'None'
}


// picks
let armour_Check = none;
let weapon_Check = none;
let enemy;
let player_Pick;
let player_Attack;
// rock = 1, paper = 2, scissors = 3
let enemy_Attack = Math.floor(Math.random() * 3) + 1;

//function fight(player_Attack, enemy_Attack) {
     //if 
//}

// Run once when ready
client.once('ready', () => {
	console.log('Ready!');
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isChatInputCommand()) return;

	const { commandName } = interaction;

    const waffles = new ActionRowBuilder()
                .addComponents(
                    new ButtonBuilder()
                        .setCustomId('waffles')
                        .setLabel('Demon Lord Waffles')
                        .setStyle(ButtonStyle.Primary),
                );
            
            const goblin = new ActionRowBuilder()
                .addComponents(
                    new ButtonBuilder()
                        .setCustomId('goblin')
				    	.setLabel('Goblin')
					    .setStyle(ButtonStyle.Primary),
                );

            const golem = new ActionRowBuilder()
                .addComponents(
                    new ButtonBuilder()
                        .setCustomId('golem')
				    	.setLabel('Golem')
					    .setStyle(ButtonStyle.Primary),
                );

                const ghost = new ActionRowBuilder()
                .addComponents(
                    new ButtonBuilder()
                        .setCustomId('ghost')
				    	.setLabel('Ghost')
					    .setStyle(ButtonStyle.Primary),
                );

                const equipment = new ActionRowBuilder()
                .addComponents(
                    new ButtonBuilder()
                        .setCustomId('equipment')
                        .setLabel('Equipments')
                        .setStyle(ButtonStyle.Primary),
                );

	if (commandName === 'help') {
        await interaction.reply('Choose player: /Playrock, /Playpaper, /Playscissors, /restart')
    } else if (commandName === 'playrock') {
        player_Pick = player_Rock;

            await interaction.reply({ content: 'Pick an enemy', ephemeral: true, components: [waffles, goblin, golem, ghost, equipment]})
        
    } else if (commandName === 'playpaper') {
        player_Pick = player_Paper;

            await interaction.reply({ content: 'Pick an enemy', ephemeral: true, components: [waffles, goblin, golem, ghost, equipment]})

    } else if (commandName === 'playscissors') {
        player_Pick = player_Scissors;

            await interaction.reply({ content: 'Pick an enemy', ephemeral: true, components: [waffles, goblin, golem, ghost, equipment]})

    } else if (commandName === 'restart'){
        player_Paper.health = 0, player_Rock.health = 0, player_Scissors.health = 120
        gold = 25, weapon_Check = 0, armour_Check = 0, Demon_Lord_Waffles.health = 250, goblin_Enemy.health = 120;
        golem_Enemy.health = 150, ghost_Enemy.health = 100;

        await interaction.reply({content: 'restarted the game', ephemeral: true})
    } 
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isButton()) return;

    const { customId } = interaction;
    let gold_income = Math.floor(Math.random() * 20) + 10;

    let damage = Math.floor(Math.random() * 20) + 1;

            const rock = new ActionRowBuilder()
                .addComponents(
                    new ButtonBuilder()
                        .setCustomId('rock')
				    	.setLabel('Rock')
					    .setStyle(ButtonStyle.Primary),
                );
            
            const paper = new ActionRowBuilder()
                .addComponents(
                    new ButtonBuilder()
                        .setCustomId('paper')
				    	.setLabel('Paper')
					    .setStyle(ButtonStyle.Primary),
                );

            const scissor = new ActionRowBuilder()
                .addComponents(
                    new ButtonBuilder()
                        .setCustomId('scissor')
				    	.setLabel('Scissor')
					    .setStyle(ButtonStyle.Primary),
                );

                const waffles = new ActionRowBuilder()
                    .addComponents(
                        new ButtonBuilder()
                            .setCustomId('waffles')
                            .setLabel('Demon Lord Waffles')
                            .setStyle(ButtonStyle.Primary),
                    );
                
                const goblin = new ActionRowBuilder()
                    .addComponents(
                        new ButtonBuilder()
                            .setCustomId('goblin')
                            .setLabel('Goblin')
                            .setStyle(ButtonStyle.Primary),
                    );
        
                const golem = new ActionRowBuilder()
                    .addComponents(
                        new ButtonBuilder()
                            .setCustomId('golem')
                            .setLabel('Golem')
                            .setStyle(ButtonStyle.Primary),
                    );
        
                    const ghost = new ActionRowBuilder()
                    .addComponents(
                        new ButtonBuilder()
                            .setCustomId('ghost')
                            .setLabel('Ghost')
                            .setStyle(ButtonStyle.Primary),
                    );
        
                    const equipment = new ActionRowBuilder()
                        .addComponents(
                            new ButtonBuilder()
                                .setCustomId('equipment')
                                .setLabel('Equipments')
                                .setStyle(ButtonStyle.Primary),
                    );

                    const BP_Normal = new ActionRowBuilder()
                        .addComponents(
                            new ButtonBuilder()
                                .setCustomId('breastplate')
                                .setLabel('Breast Plate')
                                .setStyle(ButtonStyle.Primary),
                    );

                    const BP_Gold = new ActionRowBuilder()
                        .addComponents(
                            new ButtonBuilder()
                                .setCustomId('goldbreastplate')
                                .setLabel('Gold Breast Plate')
                                .setStyle(ButtonStyle.Primary),
                    );

                    const weapon_Knife = new ActionRowBuilder()
                        .addComponents(
                            new ButtonBuilder()
                                .setCustomId('knife')
                                .setLabel('Knife')
                                .setStyle(ButtonStyle.Primary),
                    );

                    const weapon_hammer = new ActionRowBuilder()
                        .addComponents(
                            new ButtonBuilder()
                                .setCustomId('hammer')
                                .setLabel('Hammer')
                                .setStyle(ButtonStyle.Primary),
                    );

                    const weapon_Book = new ActionRowBuilder()
                        .addComponents(
                            new ButtonBuilder()
                                .setCustomId('book')
                                .setLabel('Book')
                                .setStyle(ButtonStyle.Primary),
                    );

                    const weapon_Katana = new ActionRowBuilder()
                        .addComponents(
                            new ButtonBuilder()
                                .setCustomId('katana')
                                .setLabel('Shoguns Katana')
                                .setStyle(ButtonStyle.Primary),
                    );


                    const back = new ActionRowBuilder()
                        .addComponents(
                            new ButtonBuilder()
                                .setCustomId('back')
                                .setLabel('Back')
                                .setStyle(ButtonStyle.Primary),
                        );

                    const weapons = new ActionRowBuilder()
                        .addComponents(
                            new ButtonBuilder()
                                .setCustomId('weapons')
                                .setLabel('Weapons')
                                .setStyle(ButtonStyle.Primary),
                        );

                     const armours = new ActionRowBuilder()
                        .addComponents(
                            new ButtonBuilder()
                                .setCustomId('armours')
                                .setLabel('Armours')
                                .setStyle(ButtonStyle.Primary),
                        );

    if (customId === 'waffles') {
        enemy = Demon_Lord_Waffles;

            interaction.reply({content: `Player: ${interaction.user.username}\nStats\nHealth: ${player_Pick.health} \nRock: ${player_Pick.rock}\nPaper: ${player_Pick.paper}\nScissors: ${player_Pick.scissors}
            \n\nEnemy: ${enemy.name}\nStats\nHealth: ${enemy.health}\nRock: ${enemy.rock}\nPaper: ${enemy.paper}\nScissors: ${enemy.scissors}`, 
            components: [rock, paper, scissor], ephemeral: true})

    } if (customId === 'golem') {
        enemy = golem_Enemy;
            
            interaction.reply({content: `Player: ${interaction.user.username}\nStats\nHealth: ${player_Pick.health} \nRock: ${player_Pick.rock}\nPaper: ${player_Pick.paper}\nScissors: ${player_Pick.scissors}
                \n\nEnemy: ${enemy.name}\nStats\nHealth: ${enemy.health}\nRock: ${enemy.rock}\nPaper: ${enemy.paper}\nScissors: ${enemy.scissors}`, 
                components: [rock, paper, scissor], ephemeral: true})

    } if (customId === 'goblin') {
        enemy = goblin_Enemy;

            interaction.reply({content: `Player: ${interaction.user.username}\nStats\nHealth: ${player_Pick.health} \nRock: ${player_Pick.rock}\nPaper: ${player_Pick.paper}\nScissors: ${player_Pick.scissors}
                \n\nEnemy: ${enemy.name}\nStats\nHealth: ${enemy.health}\nRock: ${enemy.rock}\nPaper: ${enemy.paper}\nScissors: ${enemy.scissors}`, 
                components: [rock, paper, scissor], ephemeral: true})

    } else if (customId === 'ghost'){
        enemy = ghost_Enemy;

            interaction.reply({content: `Player: ${interaction.user.username}\nStats\nHealth: ${player_Pick.health} \nRock: ${player_Pick.rock}\nPaper: ${player_Pick.paper}\nScissors: ${player_Pick.scissors}
                \n\nEnemy: ${enemy.name}\nStats\nHealth: ${enemy.health}\nRock: ${enemy.rock}\nPaper: ${enemy.paper}\nScissors: ${enemy.scissors}`, 
                components: [rock, paper, scissor], ephemeral: true})
    } else if (customId === 'rock') {
        // rock = 1, paper = 2, scissors = 3

        if (player_Pick.health <= 0) {
            
            if (enemy = Demon_Lord_Waffles) {
                return interaction.reply({content: `You lost to ${enemy.name}\n${enemy.name} has destroyed planet Lucia all because you lost\n\nTo play again, pick another character by doing /play to play again or /restart to restart the game`, 
                ephemeral: true, components: [waffles, goblin, golem, ghost, equipment]})
            } else {
                return interaction.reply({content: `You lost to ${enemy.name}\nAll the monsters are now ravaging the villages\n\nTo play again, pick another character by doing /play to play again or /restart to restart the game `, 
                ephemeral: true, components: [waffles, goblin, golem, ghost, equipment]})
            }
        } if (enemy.health <= 0) {
                gold += gold_income;

                    if (enemy.name === Demon_Lord_Waffles.name) {
                        enemy.health = 250;
                    } else if (enemy.name === ghost_Enemy.name) {
                        enemy.health = 100;
                    } else if (enemy.name === goblin_Enemy.name) {
                        enemy.health = 120;
                    } else {
                        enemy.health = 150;
                    }
                    return interaction.reply({content: `Pick another enemy to fight.\n\n
                    Player: ${interaction.user.username}\nStats\nHealth: ${player_Pick.health} \nRock: ${player_Pick.rock}\nPaper: ${player_Pick.paper}\nScissors: ${player_Pick.scissors}\nGold: ${gold}`
                    , ephemeral: true, components: [waffles, goblin, golem, ghost, equipment]})
        }

        enemy_Attack = Math.floor(Math.random() * 3) + 1;

        if (enemy_Attack === 1)
        {
            if (player_Pick.rock === enemy.rock){
                return interaction.reply({content: `You picked Rock || ${enemy.name} picked rock\nNo damage has been done, both attacks are equal\n\n
                Player: ${interaction.user.username}\nStats\nHealth: ${player_Pick.health} \nRock: ${player_Pick.rock}\nPaper: ${player_Pick.paper}\nScissors: ${player_Pick.scissors}
            \n\nEnemy: ${enemy.name}\nStats\nHealth: ${enemy.health}\nRock: ${enemy.rock}\nPaper: ${enemy.paper}\nScissors: ${enemy.scissors}`,
             components: [rock, paper, scissor], ephemeral: true})
            } else if (player_Pick.rock > enemy.rock) {
                enemy.health = enemy.health - damage;
                return interaction.reply({content: `You picked Rock || ${enemy.name} picked rock\nYou overwhelmed ${enemy.name} and damaged him for ${damage}\n\nPlayer: ${interaction.user.username}\nStats\nHealth: ${player_Pick.health} \nRock: ${player_Pick.rock}\nPaper: ${player_Pick.paper}\nScissors: ${player_Pick.scissors}
                \n\nEnemy: ${enemy.name}\nStats\nHealth: ${enemy.health}\nRock: ${enemy.rock}\nPaper: ${enemy.paper}\nScissors: ${enemy.scissors}`, 
                components: [rock, paper, scissor], ephemeral: true})
            } else if (player_Pick.rock < enemy.rock){
                player_Pick.health = player_Pick.health - damage;
                return interaction.reply({content: `You picked Rock || ${enemy.name} picked rock\n${enemy.name} Overwhelemed you and damaged you for ${damage}\n\nPlayer: ${interaction.user.username}\nStats\nHealth: ${player_Pick.health} \nRock: ${player_Pick.rock}\nPaper: ${player_Pick.paper}\nScissors: ${player_Pick.scissors}
                \n\nEnemy: ${enemy.name}\nStats\nHealth: ${enemy.health}\nRock: ${enemy.rock}\nPaper: ${enemy.paper}\nScissors: ${enemy.scissors}`, 
                components: [rock, paper, scissor], ephemeral: true})
            }
        } else if (enemy_Attack === 2) {
            player_Pick.health = player_Pick.health - damage;
            return interaction.reply ({content: `You picked Rock || ${enemy.name} picks paper and has damaged you for ${damage}\n\nPlayer: ${interaction.user.username}\nStats\nHealth: ${player_Pick.health} \nRock: ${player_Pick.rock}\nPaper: ${player_Pick.paper}\nScissors: ${player_Pick.scissors}
            \n\nEnemy: ${enemy.name}\nStats\nHealth: ${enemy.health}\nRock: ${enemy.rock}\nPaper: ${enemy.paper}\nScissors: ${enemy.scissors}`, 
            components: [rock, paper, scissor], ephemeral: true});
        } else if (enemy_Attack === 3) {
            enemy.health = enemy.health - damage;
            return interaction.reply({content: `You picked Rock || ${enemy.name} picks scissors and lost ${damage} health from you\n\nPlayer: ${interaction.user.username}\nStats\nHealth: ${player_Pick.health} \nRock: ${player_Pick.rock}\nPaper: ${player_Pick.paper}\nScissors: ${player_Pick.scissors}
            \n\nEnemy: ${enemy.name}\nStats\nHealth: ${enemy.health}\nRock: ${enemy.rock}\nPaper: ${enemy.paper}\nScissors: ${enemy.scissors}`, 
            components: [rock, paper, scissor], ephemeral: true})
        }

    } else if (customId === 'paper') {
        // rock = 1, paper = 2, scissors = 3

        if (player_Pick.health <= 0) {
            
            if (enemy = Demon_Lord_Waffles) {
                return interaction.reply({content: `You lost to ${enemy.name}\n${enemy.name} has destroyed planet Lucia all because you lost\n\nTo play again, pick another character by doing /play to play again or /restart to restart the game`, 
                ephemeral: true, components: [waffles, goblin, golem, ghost] })
            } else {
                return interaction.reply({content: `You lost to ${enemy.name}\nAll the monsters are now ravaging the villages\n\nTo play again, pick another character by doing /play to play again or /restart to restart the game `, 
                ephemeral: true, components: [waffles, goblin, golem, ghost]})
            }
        } if (enemy.health <= 0) {
            gold += gold_income;
            
                    if (enemy.name === Demon_Lord_Waffles.name) {
                        enemy.health = 250;
                    } else if (enemy.name === ghost_Enemy.name) {
                        enemy.health = 100;
                    } else if (enemy.name === goblin_Enemy.name) {
                        enemy.health = 120;
                    } else {
                        enemy.health = 150;
                    }
                    return interaction.reply({content: `Pick another enemy to fight.\n\n
                    Player: ${interaction.user.username}\nStats\nHealth: ${player_Pick.health} \nRock: ${player_Pick.rock}\nPaper: ${player_Pick.paper}\nScissors: ${player_Pick.scissors}\nGold: ${gold}`
                    , ephemeral: true, components: [waffles, goblin, golem, ghost, equipment]})
        }

        enemy_Attack = Math.floor(Math.random() * 3) + 1;
        
                if (enemy_Attack === 2)
                {
                    if (player_Pick.paper === enemy.paper){
                        return interaction.reply({content: `You picked paper || ${enemy.name} picked paper\nNo damage has been done, both attacks are equal\n\n
                        Player: ${interaction.user.username}\nStats\nHealth: ${player_Pick.health} \nRock: ${player_Pick.rock}\nPaper: ${player_Pick.paper}\nScissors: ${player_Pick.scissors}
                    \n\nEnemy: ${enemy.name}\nStats\nHealth: ${enemy.health}\nRock: ${enemy.rock}\nPaper: ${enemy.paper}\nScissors: ${enemy.scissors}`,
                     components: [rock, paper, scissor], ephemeral: true})
                    } else if (player_Pick.paper > enemy.paper) {
                        enemy.health = enemy.health - damage;
                        return interaction.reply({content: `You picked paper || ${enemy.name} picked paper\nYou overwhelmed ${enemy.name} and damaged him for ${damage}\n\nPlayer: ${interaction.user.username}\nStats\nHealth: ${player_Pick.health} \nRock: ${player_Pick.rock}\nPaper: ${player_Pick.paper}\nScissors: ${player_Pick.scissors}
                        \n\nEnemy: ${enemy.name}\nStats\nHealth: ${enemy.health}\nRock: ${enemy.rock}\nPaper: ${enemy.paper}\nScissors: ${enemy.scissors}`, 
                        components: [rock, paper, scissor], ephemeral: true})
                    } else if (player_Pick.paper < enemy.paper){
                        player_Pick.health = player_Pick.health - damage;
                        return interaction.reply({content: `You picked paper || ${enemy.name} picked paper\n${enemy.name} Overwhelemed you and damaged you for ${damage}\n\nPlayer: ${interaction.user.username}\nStats\nHealth: ${player_Pick.health} \nRock: ${player_Pick.rock}\nPaper: ${player_Pick.paper}\nScissors: ${player_Pick.scissors}
                        \n\nEnemy: ${enemy.name}\nStats\nHealth: ${enemy.health}\nRock: ${enemy.rock}\nPaper: ${enemy.paper}\nScissors: ${enemy.scissors}`, 
                        components: [rock, paper, scissor], ephemeral: true})
                    }
                }
                if (enemy_Attack === 3) {
                    player_Pick.health = player_Pick.health - damage;
                    return interaction.reply ({content: `You picked paper || ${enemy.name} picks scissors and has damaged you for ${damage}\n\nPlayer: ${interaction.user.username}\nStats\nHealth: ${player_Pick.health} \nRock: ${player_Pick.rock}\nPaper: ${player_Pick.paper}\nScissors: ${player_Pick.scissors}
                    \n\nEnemy: ${enemy.name}\nStats\nHealth: ${enemy.health}\nRock: ${enemy.rock}\nPaper: ${enemy.paper}\nScissors: ${enemy.scissors}`, 
                    components: [rock, paper, scissor], ephemeral: true});
                }
                if (enemy_Attack === 1) {
                    enemy.health = enemy.health - damage;
                    return interaction.reply({content: `You picked paper || ${enemy.name} picks rock and lost ${damage} health from you\n\nPlayer: ${interaction.user.username}\nStats\nHealth: ${player_Pick.health} \nRock: ${player_Pick.rock}\nPaper: ${player_Pick.paper}\nScissors: ${player_Pick.scissors}
                    \n\nEnemy: ${enemy.name}\nStats\nHealth: ${enemy.health}\nRock: ${enemy.rock}\nPaper: ${enemy.paper}\nScissors: ${enemy.scissors}`, 
                    components: [rock, paper, scissor], ephemeral: true})
                }
    
    } else if (customId === 'scissor') {
                // rock = 1, paper = 2, scissors = 3
        
        if (player_Pick.health <= 0) {
            if (enemy = Demon_Lord_Waffles) {
                return interaction.reply({content: `You lost to ${enemy.name}\n${enemy.name} has destroyed planet Lucia all because you lost\n\nTo play again, pick another character by doing /play to play again or /restart to restart the game`, 
                ephemeral: true, components: [waffles, goblin, golem, ghost] })
            } else {
                return interaction.reply({content: `You lost to ${enemy.name}\nAll the monsters are now ravaging the villages\n\nTo play again, pick another character by doing /play to play again or /restart to restart the game `, 
                ephemeral: true, components: [waffles, goblin, golem, ghost]})
            }

        } if (enemy.health <= 0) {
            gold += gold_income;
    
                    if (enemy.name === Demon_Lord_Waffles.name) {
                        enemy.health = 250;
                    } else if (enemy.name === ghost_Enemy.name) {
                        enemy.health = 100;
                    } else if (enemy.name === goblin_Enemy.name) {
                        enemy.health = 120;
                    } else {
                        enemy.health = 150;
                    }
                    return interaction.reply({content: `Pick another enemy to fight.\n\n
                    Player: ${interaction.user.username}\nStats\nHealth: ${player_Pick.health} \nRock: ${player_Pick.rock}\nPaper: ${player_Pick.paper}\nScissors: ${player_Pick.scissors}\nGold: ${gold}`
                    , ephemeral: true, components: [waffles, goblin, golem, ghost, equipment]})
        }


                if (enemy_Attack === 3)
                {
                    if (player_Pick.scisors === enemy.scisors){
                        return interaction.reply({content: `You picked scissors || ${enemy.name} picked scissors\nNo damage has been done, both attacks are equal\n\n
                        Player: ${interaction.user.username}\nStats\nHealth: ${player_Pick.health} \nRock: ${player_Pick.rock}\nPaper: ${player_Pick.paper}\nScissors: ${player_Pick.scissors}
                    \n\nEnemy: ${enemy.name}\nStats\nHealth: ${enemy.health}\nRock: ${enemy.rock}\nPaper: ${enemy.paper}\nScissors: ${enemy.scissors}`,
                     components: [rock, paper, scissor], ephemeral: true})
                    } else if (player_Pick.scisors > enemy.scisors) {
                        enemy.health = enemy.health - damage;
                        return interaction.reply({content: `You picked scissors || ${enemy.name} picked scissors\nYou overwhelmed ${enemy.name} and damaged him for ${damage}\n\nPlayer: ${interaction.user.username}\nStats\nHealth: ${player_Pick.health} \nRock: ${player_Pick.rock}\nPaper: ${player_Pick.paper}\nScissors: ${player_Pick.scissors}
                        \n\nEnemy: ${enemy.name}\nStats\nHealth: ${enemy.health}\nRock: ${enemy.rock}\nPaper: ${enemy.paper}\nScissors: ${enemy.scissors}`, 
                        components: [rock, paper, scissor], ephemeral: true})
                    } else if (player_Pick.scisors < enemy.scisors){
                        player_Pick.health = player_Pick.health - damage;
                        return interaction.reply({content: `You picked scissors || ${enemy.name} picked scissors\n${enemy.name} Overwhelemed you and damaged you for ${damage}\n\nPlayer: ${interaction.user.username}\nStats\nHealth: ${player_Pick.health} \nRock: ${player_Pick.rock}\nPaper: ${player_Pick.paper}\nScissors: ${player_Pick.scissors}
                        \n\nEnemy: ${enemy.name}\nStats\nHealth: ${enemy.health}\nRock: ${enemy.rock}\nPaper: ${enemy.paper}\nScissors: ${enemy.scissors}`, 
                        components: [rock, paper, scissor], ephemeral: true})
                    }
                }
                if (enemy_Attack === 1) {
                    player_Pick.health = player_Pick.health - damage;
                    return interaction.reply ({content: `You picked scissors || ${enemy.name} picks rock and has damaged you for ${damage}\n\nPlayer: ${interaction.user.username}\nStats\nHealth: ${player_Pick.health} \nRock: ${player_Pick.rock}\nPaper: ${player_Pick.paper}\nScissors: ${player_Pick.scissors}
                    \n\nEnemy: ${enemy.name}\nStats\nHealth: ${enemy.health}\nRock: ${enemy.rock}\nPaper: ${enemy.paper}\nScissors: ${enemy.scissors}`, 
                    components: [rock, paper, scissor], ephemeral: true});
                }
                if (enemy_Attack === 2) {
                    enemy.health = enemy.health - damage;
                    return interaction.reply({content: `You picked scissors || ${enemy.name} picks paper and lost ${damage} health  from you\n\nPlayer: ${interaction.user.username}\nStats\nHealth: ${player_Pick.health} \nRock: ${player_Pick.rock}\nPaper: ${player_Pick.paper}\nScissors: ${player_Pick.scissors}
                    \n\nEnemy: ${enemy.name}\nStats\nHealth: ${enemy.health}\nRock: ${enemy.rock}\nPaper: ${enemy.paper}\nScissors: ${enemy.scissors}`, 
                    components: [rock, paper, scissor], ephemeral: true})
                }
        
    } else if (customId === 'equipment') {
        return interaction.reply({content: `Weapon: ${weapon_Check.name}\nArmour: ${armour_Check.name}`, ephemeral: true, components: [weapons, armours]})
    } else if (customId === 'back') {
        return interaction.reply({content: 'Pick an enemy', ephemeral: true, components: [waffles, goblin, golem, ghost, equipment]})
    } else if (customId === 'weapons') {
        return interaction.reply({content: `Gold: ${gold}g\n\nWeapon:\nBook: 75g\nKnife: 75g\nHammer: 75g\nShogun's Katana: 400g`
        , ephemeral: true, components: [weapon_Book, weapon_Knife, weapon_hammer, weapon_Katana, back]})
    } else if (customId === 'armours') {
        return interaction.reply({content: `Gold: ${gold}g\n\nArmour:\nBreast Plate: ${breast_Plate.gold}g\nGold Breast Plate: ${gold_Breast_Plate.gold}g`
        , ephemeral: true, components: [BP_Normal, BP_Gold, back]})
    } else if (customId === 'knife') {
        if (gold >= 75) {
            gold -= 75;
            
            weapon_Check = weapon_Knife;
        if (player_Pick.rock === 3) {
            player_Pick.rock -= weapon_hammer.rock;
        } 
        if (player_Pick.paper === 3) {
            player_Pick.paper -= weapon_Book.paper;
        }
        player_Pick.scisors += weapon_Knife.scisors;

        } else {
            return interaction.reply({content: 'Not enough gold', ephemeral: true, components: [back]})
        }
        
    } else if (customId === 'book') {
        if (gold >= 75) {
            gold -= 75;

            weapon_Check = weapon_Book;
        if (player_Pick.rock === 3) {
            player_Pick.rock -= weapon_hammer.rock;
        } 
        if (player_Pick.scissors === 3) {
            player_Pick.scissors -= weapon_Knife.scisors;
        }
        player_Pick.paper += weapon_Book.paper;

        } else {
            return interaction.reply({content: 'Not enough gold', ephemeral: true, components: [back]})
        }
        
    } else if (customId === 'hammer') {
        if (gold >= 75) {
            gold -= 75;

            weapon_Check = weapon_hammer;
        if (player_Pick.scisors === 3) {
            player_Pick.scisors -= weapon_Knife.scisors;
        } 
        if (player_Pick.paper === 3) {
            player_Pick.paper -= weapon_Book.paper;
        }
        player_Pick.rock += weapon_hammer.rock;

        }  else {
            return interaction.reply({content: 'Not enough gold', ephemeral: true, components: [back]})
        }
        
    } else if (customId === 'katana') {
        if (gold >= weapon_Katana.gold) {
            gold -= weapon_Katana.gold;
            if (weapon_Check === weapon_Book) {
                player_Pick.paper -= weapon_Book.paper;
            } else if (weapon_Check === weapon_Knife) {
                player_Pick.knife -= weapon_Knife.scisors;
            } else if (weapon_Check === weapon_hammer) {
                player_Pick.rock -= weapon_hammer.rock
            }
            weapon_Check = weapon_Katana;
            player_Pick.rock += weapon_Katana.rock;
            player_Pick.paper += weapon_Katana.paper;
            player_Pick.scisors += weapon_Katana.scisors;

        }  else {
            return interaction.reply({content: 'Not enough gold', ephemeral: true, components: [back]})
        }
        
    } else if (customId === 'breastplate') {
        if (gold >= breast_Plate.gold) {
            gold -= breast_Plate.gold;
            if (armour_Check = gold_Breast_Plate) {
                player_Pick.health -= gold_Breast_Plate.health
            }
            armour_Check = breast_Plate;
            player_Pick.health += breast_Plate.health;
        } else {
            return interaction.reply({content: 'Not enough gold', ephemeral: true, components: [back]})
        }
        
        
    } else if (customId === 'goldbreastplate') {
        if (gold >= gold_Breast_Plate.gold) {
            gold -= gold_Breast_Plate.gold
            if (armour_Check = breast_Plate) {
                player_Pick.health -= breast_Plate.health
            }
            armour_Check = gold_Breast_Plate;
            player_Pick.health += gold_Breast_Plate.health;
        } else {
            return interaction.reply({content: 'Not enough gold', ephemeral: true, components: [back]})
        }
        
    }
});


// Login to Discord with your client's token
client.login(token);
