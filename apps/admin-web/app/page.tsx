const metrics = [
  { label: "입점 매장", value: "0" },
  { label: "오늘 등록 박스", value: "0" },
  { label: "픽업 완료율", value: "-" },
  { label: "월 거래액", value: "0원" },
];

export default function Page() {
  return (
    <main className="page">
      <section className="header">
        <p>Admin</p>
        <h1>동네 마감박스 운영 대시보드</h1>
      </section>
      <section className="grid">
        {metrics.map((metric) => (
          <article className="metric" key={metric.label}>
            <span>{metric.label}</span>
            <strong>{metric.value}</strong>
          </article>
        ))}
      </section>
    </main>
  );
}

