interface ShoeProps {
  shoe: {
    id: number;
    name: string;
    price: string;
    image: string;
  };
}

export default function ShoeCard({ shoe }: ShoeProps) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "5px",
        padding: "1rem",
        textAlign: "center",
      }}
    >
      <img
        src={shoe.image}
        alt={shoe.name}
        style={{ width: "100%", height: "auto", borderRadius: "5px" }}
      />
      <h3>{shoe.name}</h3>
      <p>{shoe.price}</p>
      <button
        style={{
          padding: "0.5rem 1rem",
          backgroundColor: "#0070f3",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
        }}
      >
        Buy Now
      </button>
    </div>
  );
}
