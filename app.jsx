const { useState, useEffect } = React;

function Banner({ image, title }) {
  return (
    <div
      style={{
        minWidth: "85%",
        height: 170,
        borderRadius: 22,
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative"
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: 22,
          background:
            "linear-gradient(180deg, transparent, rgba(0,0,0,.45))"
        }}
      />
      <span
        style={{
          position: "absolute",
          bottom: 14,
          left: 14,
          color: "#fff",
          fontSize: 18,
          fontWeight: 600
        }}
      >
        {title}
      </span>
    </div>
  );
}

function Product({ title, price, image }) {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 20,
        padding: 10
      }}
    >
      <img
        src={image}
        style={{
          width: "100%",
          aspectRatio: "1/1",
          objectFit: "cover",
          borderRadius: 16
        }}
      />
      <h3 style={{ fontSize: 14, margin: "8px 0 2px" }}>{title}</h3>
      <div style={{ fontWeight: 700 }}>${price}</div>
    </div>
  );
}

function App() {
  useEffect(() => {
    Telegram.WebApp.expand();
  }, []);

  return (
    <div
      style={{
        fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif",
        background: "#F6F7FB",
        minHeight: "100vh"
      }}
    >
      {/* HEADER */}
      <div
        style={{
          padding: "14px 16px",
          fontSize: 20,
          fontWeight: 700
        }}
      >
        Discover
      </div>

      {/* BANNERS */}
      <div
        style={{
          display: "flex",
          gap: 12,
          overflowX: "auto",
          padding: "0 16px"
        }}
      >
        <Banner
          image="https://images.unsplash.com/photo-1512436991641-6745cdb1723f"
          title="New Collection"
        />
        <Banner
          image="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
          title="Smart Devices"
        />
        <Banner
          image="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
          title="Digital Goods"
        />
      </div>

      {/* CATEGORIES */}
      <div
        style={{
          display: "flex",
          gap: 10,
          padding: "14px 16px",
          overflowX: "auto"
        }}
      >
        {["Headphones", "Presets", "UI Kits", "Icons"].map(c => (
          <div
            key={c}
            style={{
              background: "#fff",
              padding: "8px 14px",
              borderRadius: 999,
              fontSize: 13,
              whiteSpace: "nowrap"
            }}
          >
            {c}
          </div>
        ))}
      </div>

      {/* PRODUCTS */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2,1fr)",
          gap: 14,
          padding: "0 16px 120px"
        }}
      >
        <Product
          title="Studio Headset"
          price={130}
          image="https://images.unsplash.com/photo-1518441902117-fc8b6c1d8c3c"
        />
        <Product
          title="Neon Presets"
          price={29}
          image="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
        />
        <Product
          title="Watch UI"
          price={49}
          image="https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b"
        />
        <Product
          title="Icon Pack"
          price={19}
          image="https://images.unsplash.com/photo-1545239351-1141bd82e8a6"
        />
      </div>

      {/* BOTTOM NAV */}
      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          width: "100%",
          background: "rgba(255,255,255,.9)",
          backdropFilter: "blur(12px)",
          display: "flex",
          justifyContent: "space-around",
          padding: "10px 0 14px",
          borderTop: "1px solid rgba(0,0,0,.05)"
        }}
      >
        🏠 🛒 ❤️ 👤
      </div>
    </div>
  );
}
