import React from "react";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div>
      <div
        className="ui raised very padded text container segment"
        style={{ marginTop: "80px" }}
      >
        <Link to="/card/osman" className="ui header">Osman</Link>
        <p>
          Lorem Ipsum, masaüstü yayıncılık ve basın yayın sektöründe kullanılan
          taklit yazı bloğu olarak tanımlanır. Lipsum, oluşturulacak şablon ve
          taslaklarda içerik yerine geçerek yazı bloğunu doldurmak için
          kullanılır.
        </p>
      </div>
      <div
        className="ui raised very padded text container segment"
        style={{ marginTop: "80px" }}
      >
        <Link to="/card/maria"  className="ui header">Maria</Link>
        <p>
          Lorem Ipsum, masaüstü yayıncılık ve basın yayın sektöründe kullanılan
          taklit yazı bloğu olarak tanımlanır. Lipsum, oluşturulacak şablon ve
          taslaklarda içerik yerine geçerek yazı bloğunu doldurmak için
          kullanılır.
        </p>
      </div>
    </div>
  );
}
