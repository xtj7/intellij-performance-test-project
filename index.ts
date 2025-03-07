import {ChatInputCommandInteraction, Message} from "discord.js";

module.exports = {
    data: {name: 'pet help'},
    execute: async (
        interaction: ChatInputCommandInteraction | Message,
    ) => {
        interaction.reply({
            content: 'Hello'
        })
    }
}
