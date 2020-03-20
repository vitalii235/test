import {renderEntireTree} from './../render';

let state = {
    dialogPage: {
        messagesData: [
            { id: 1, message: 'How are you' },
            { id: 2, message: 'What is you name&' },
            { id: 3, message: 'It can hardly be so' },
        ],
        newMessageText: 'Test-text-message',
        dialogsData: [
            { id: 1, name: 'Васька' },
            { id: 2, name: 'Петька' },
            { id: 3, name: 'Дашка' },
            { id: 4, name: 'Дуська' },
            { id: 5, name: 'Верка' },
        ],
    },
    postPage: {
        postsData: [
            { id: 1, message: 'Hi, how are you', likes: 32 },
            { id: 2, message: 'Its my first post', likes: 28 },
        ],
        newPostText: "Test-text",
    },
    
    
    // TEST
    testPage: {
        MessageTestList: [
            { id: 1, message: "Hi man" },
            { id: 2, message: "Hi woman" },
            { id: 3, message: "Hi friend" },
            { id: 4, message: "Hi Moms" },
        ],
        messageTestText: 'Hi my new test',
        DialogTestMessage: [
            { id: 1, names: 'Andrey' },
            { id: 2, names: 'Maxs' },
            { id: 3, names: 'Alexs' },
            { id: 4, names: 'Martin' },
        ]
    },  
}


export let addPost = () => {
    let newPost = {
        id:5,
        message:state.postPage.newPostText,
        likes:0,
    };

    state.postPage.postsData.push (newPost);
    state.postPage.newPostText='';
    renderEntireTree (state);
}

export let updateNewPostText = (newText) => {

    state.postPage.newPostText=newText;
    
    renderEntireTree (state);
}

// TEST
export let addMessage = (addMess) => {
    let newMEssage = {
        id:4,
        message:addMess,
    }
    state.dialogPage.messagesData.push (newMEssage)
    state.dialogPage.newMessageText='';
    renderEntireTree (state);

}
export let updateNewMessageText = (newMessage) => {
    state.dialogPage.newMessageText=newMessage;
    
    renderEntireTree (state);
}

// My own test

export let addText =(newText)=> {
    state.testPage.MessageTestList.push(
       { id:5,
        message:state.testPage.messageTestText},
    )
    state.testPage.messageTestText='';
    renderEntireTree (state);
}

export let updateNewTestText = (message)=> {
    state.testPage.messageTestText=message;
    renderEntireTree (state);
}
export default state;