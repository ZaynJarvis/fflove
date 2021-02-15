function App() {
  const articles = [
    {
      id: 1,
      title: '法拉利未来',
      short: 'iPROM je s svojimi programskimi rešitvami za distribucijo oglasnih sporočil v preteklem letu slovenskim uporabnikom digitalnih medijev prikazal 49,6 odstotka več oglasov kot v letu 2019.',
    },
    {
      id: 2,
      title: 'SPAC in PSAC',
      short: 'Po številu prikazanih oglasov med panogami ponovno prednjači trgovina, največje povečanje deleža prikazanih oglasov pa je bila deležna panoga zdravje.',
    }
  ]
  return (
    <article>
      <h2 style={{ textAlign: 'center' }}>最新消息</h2>
      {articles.map(a => (<div key={a.id} style={{ borderBottom: 'whitesmoke 1px solid' }}>
        <h4>{a.title}</h4>
        <p>{a.short}</p>
      </div>)
      )}
    </article>
  );
}

export default App;
