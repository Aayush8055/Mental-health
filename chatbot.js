document.addEventListener('DOMContentLoaded', function () {
    const chatbotMessages = document.getElementById('chatbot-messages');
    const chatbotInput = document.getElementById('chatbot-input');
    const chatbotSend = document.getElementById('chatbot-send');
  
    const responses = {
      anxiety: "It sounds like you're feeling anxious. Try deep breathing exercises or mindfulness techniques. Would you like more tips?",
      stress: "Stress can be overwhelming. Consider taking a break, practicing yoga, or journaling. How can I assist you further?",
      insomnia: "Struggling with sleep? Try establishing a bedtime routine and avoiding screens before bed. Would you like more advice?",
      loneliness: "Feeling lonely is tough. Reach out to a friend or join a community group. You're not alone. How can I help?",
      burnout: "Burnout is serious. Take time to rest and prioritize self-care. Would you like resources for managing burnout?",
      ptsd: "PTSD can be challenging. Consider seeking professional help or joining a support group. How can I support you?",
      socialAnxiety: "Social anxiety can be difficult. Practice gradual exposure to social situations. Would you like more guidance?",
      default: "I'm here to help. Can you tell me more about how you're feeling?",
    };
  
    function detectIssue(message) {
      if (message.toLowerCase().includes('anxious') || message.toLowerCase().includes('anxiety')) {
        return 'anxiety';
      } else if (message.toLowerCase().includes('stress')) {
        return 'stress';
      } else if (message.toLowerCase().includes('insomnia') || message.toLowerCase().includes('sleep')) {
        return 'insomnia';
      } else if (message.toLowerCase().includes('lonely') || message.toLowerCase().includes('loneliness')) {
        return 'loneliness';
      } else if (message.toLowerCase().includes('burnout')) {
        return 'burnout';
      } else if (message.toLowerCase().includes('ptsd')) {
        return 'ptsd';
      } else if (message.toLowerCase().includes('social anxiety')) {
        return 'socialAnxiety';
      } else {
        return 'default';
      }
    }
  
    function addMessage(sender, message) {
      const messageElement = document.createElement('div');
      messageElement.classList.add('message', sender);
      messageElement.textContent = message;
      chatbotMessages.appendChild(messageElement);
      chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }
  
    chatbotSend.addEventListener('click', function () {
      const userMessage = chatbotInput.value.trim();
      if (userMessage) {
        addMessage('user', userMessage);
        const issue = detectIssue(userMessage);
        const botResponse = responses[issue];
        setTimeout(() => {
          addMessage('bot', botResponse);
        }, 500);
        chatbotInput.value = '';
      }
    });
  
    chatbotInput.addEventListener('keypress', function (e) {
      if (e.key === 'Enter') {
        chatbotSend.click();
      }
    });
  });
  