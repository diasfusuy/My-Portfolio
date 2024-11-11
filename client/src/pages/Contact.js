import React from 'react';

const Contact = () => {
    return (
        <div>
            <h2>Contact</h2>
            <form>
                <label>Name</label>
                <input type='text' name='name' required />
                <label>Email</label>
                <input type='email' name='email' require />
                <label>Message</label>
                <input name='message' required />
                <textarea name='message' required />
                <button type='submit'>Send</button>
            </form>
        </div>
    );
};

export default Contact;