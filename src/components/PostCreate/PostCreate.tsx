import React from 'react';

interface IPostCreate {
    history : {
        push: (url: string) => void
    }
}
const heightTextareaText = 50;
const widthTextareaText = 100;
const heightTextareaDesc = 10;

const PostCreate: React.FC<IPostCreate> = ({history}) => {
  const [title, setTitle] = React.useState<string>('');
  const [description, setDescription] = React.useState<string>('');
  const [text, setText] = React.useState<string>('');

  const onSubmit = React.useCallback(
      async (event) => {
        event.preventDefault();
        await fetch('http://localhost:3000/posts', {
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({title, author: 2, description, text}),
        });
        history.push('');
      },
      [title, description, text],
  );


  return (
    <section className="post-create-form">
      <form>
        <div className="post-create-form-item">
                    Название поста
        </div>
        <div className="post-create-form-item">
          <textarea
            cols={widthTextareaText}
            name="post-title"
            required
            value={title}
            onChange={(event) => setTitle(event.target.value)}/>
        </div>
        <div className="post-create-form-item">
                    Описание поста
        </div>
        <div className="post-create-form-item">
          <textarea
            name="post-description"
            rows={heightTextareaDesc}
            cols={widthTextareaText}
            required
            value={description}
            onChange={(event) => setDescription(event.target.value)} />
        </div>
        <div className="post-create-form-item">
                    Текст поста
        </div>
        <div className="post-create-form-item">

          <textarea
            name="post-text"
            cols={widthTextareaText}
            rows={heightTextareaText}
            required
            value={text}
            onChange={(event) => setText(event.target.value)}/>
        </div>
        <div className="post-create-form-item">
          <button
            type="submit"
            onClick={onSubmit}>
                        Опубликовать пост</button>
        </div>
      </form>
    </section>
  );
};

export default PostCreate;
