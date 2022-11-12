const data = {
  message: {
    text: "Hi",
  },
  author: {
    id: 1,
    name: "Admin",
  },
};

export const App = () => (
    const message = data;
  <>
    <MessageLine>
      {!message.isAuthor && <AvatarLeft /> }
      <Message data={message.message}/>
      {message.isAuthor && <AvatarRight /> }
    </MessageLine>
  </>
);

export const Message = () => (
    const message = {};
  <>
    <>
    {isMessageText && <MessageText/>}
    {isMessageImage && <MessageImage/>}
    </>
  </>
);


[
    - inbox A
    - inbox B
    - inbox C
]

{
    user: {
        id: 1,
        name: 'AAA',
    },
    messages: [],
}

[
    - message A
    - message B
    - message C
]

{

}

const inbox = null;
