const Alexa = require('ask-sdk-core');

const GetDailyTipHandler = {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'GetDailyTipIntent';
    },
    handle(handlerInput) {
        const tips = [
            'Take small steps toward your goals every day.',
            'Practice mindfulness to stay focused.',
            'Set realistic and achievable goals.',
            'Stay consistent with your efforts.',
            'Reflect on your progress regularly.'
        ];
        const randomTip = tips[Math.floor(Math.random() * tips.length)];
        
        const speechText = `Here is your self-improvement tip: ${randomTip}`;
        return handlerInput.responseBuilder
            .speak(speechText)
            .getResponse();
    }
};

exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        GetDailyTipHandler
    )
    .lambda();
