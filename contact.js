function initializeForm() {
    const contactForm = document.getElementById('contactForm');
    const projectOption = document.getElementById('projectOption');
    const teamOption = document.getElementById('teamOption');
    const conversationOption = document.getElementById('conversationOption');

    if (!(contactForm instanceof HTMLFormElement) || !(projectOption instanceof HTMLElement) || !(teamOption instanceof HTMLElement) || !(conversationOption instanceof HTMLElement)) {
        console.error('Error: One or more form elements are missing.');
    }

    const options = ['Modern', 'Traditional', 'Contemporary', 'Minimalist', 'Rustic'];
    populateOptionsDropdown(options);

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const selectedOption = document.querySelector('input[name="contactOption"]:checked');

        if (!selectedOption || !(selectedOption instanceof HTMLInputElement)) {
            console.error('Please select a contact option before submitting the form.');
            return;
        }

        switch (selectedOption.value) {
            case 'projectOption':
                console.log('Project form submitted');
                break;
            case 'teamOption':
                console.log('Join The Team form submitted');
                break;
            case 'conversationOption':
                console.log('Send an email form submitted');
                break;
            default:
                console.error('Invalid option selected');
        }
    });

    const submitButtons = document.querySelectorAll('.arb');

    submitButtons.forEach(function (button) {
        button.addEventListener('click', function (event) {
            event.preventDefault();

            // Check if the clicked button has the class "arb"
            if (button.classList.contains('arb')) {
                console.log('Not available for now');
                return;
            }

            // Handle form submission logic here for other buttons
            const selectedOption = document.querySelector('input[name="contactOption"]:checked');
            
            if (!selectedOption || !(selectedOption instanceof HTMLInputElement)) {
                console.error('Invalid option selected');
                return;
            }

            switch (selectedOption.value) {
                case 'projectOption':
                    console.log('Project form submitted');
                    break;
                case 'teamOption':
                    console.log('Join The Team form submitted');
                    break;
                case 'conversationOption':
                    console.log('Send an email form submitted');
                    break;
                default:
                    console.error('Invalid option selected');
            }
        });
    });

    document.querySelectorAll('input[name="contactOption"]').forEach(function (radio) {
        radio.addEventListener('change', function () {
            projectOption.style.display = 'none';
            teamOption.style.display = 'none';
            conversationOption.style.display = 'none';

            const selectedOption = document.querySelector('input[name="contactOption"]:checked');

            if (!selectedOption || !(selectedOption instanceof HTMLInputElement)) {
                console.error('Please select a contact option.');
                return;
            }

            switch (selectedOption.value) {
                case 'projectOption':
                    projectOption.style.display = 'block';
                    break;
                case 'teamOption':
                    teamOption.style.display = 'block';
                    break;
                case 'conversationOption':
                    conversationOption.style.display = 'block';
                    break;
                default:
                    console.error('Invalid option selected');
            }
        });
    });
}

function populateOptionsDropdown(options) {
    const dropdown = document.getElementById('architecturalStyle');
    if (!(dropdown instanceof HTMLSelectElement)) {
        console.error('Welcome in the contact form, choose below your desired contact method');
        return;
    }

    options.forEach(function (option) {
        const optionElement = document.createElement('option');
        optionElement.value = option;
        optionElement.text = option;
        dropdown.add(optionElement);
    });
}

// Call the initialization function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initializeForm);

function sendEmail() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    if (typeof name !== 'string' || typeof email !== 'string' || typeof message !== 'string' || name.trim() === '' || email.trim() === '' || message.trim() === '') {
        return;
    }

    var subject = 'Message from: ' + name;
    var body = 'Name and Surname: ' + name + '\nEmail: ' + email + '\n\nMessage:\n' + message;

    window.open('mailto:website.architectural@gmail.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body));
}

function goBack() {
    window.history.back();
}
