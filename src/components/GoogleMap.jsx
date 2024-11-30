import React from "react";

const GoogleMap = () => {
  return (
    <div className="h-100">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d195885.05345415967!2d32.597956375393714!3d39.90325990476613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d347d520732db1%3A0xbdc57b0c0842b8d!2sAnkara!5e0!3m2!1str!2str!4v1732987594958!5m2!1str!2str"
        width="100%"
        height="100%"
        style={{ border: 0, borderRadius: "10px" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Ankara Haritası"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
