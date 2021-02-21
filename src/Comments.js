function App() {
  const articles = [
    {
      id: 1,
      name: '小菜刀',
      comment: 'iPROM je s svojimi programskimi rešitvami za distribucijo oglasnih',
    },
    {
      id: 2,
      name: '大砍刀',
      comment: 'Nice future worth a shot',
    },
    {
      id: 3,
      name: 'Ninja',
      comment: 'Looks good, can compete with Tesla',
    },
  ]
  return (
    <>
      <article>
        <h2 style={{ textAlign: 'center' }}>粉丝留言</h2>
        {articles.map(a => (
          <div key={a.id} className='comment'>
            <p><span>{a.name}: </span>{a.comment}</p>
          </div>)
        )}
      </article>
      <article>
        <input type='text' placeholder='你的网名' style={{ display: 'block' }} />
        <textarea rows='5' placeholder='说点什么吧！'></textarea>
        <input type='submit' />
      </article>
    </>
  );
}

export default App;
