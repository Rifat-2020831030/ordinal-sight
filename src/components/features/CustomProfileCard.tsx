import { PlayIcon } from "./SharedIcons";

export const CustomProfileCard = () => {
  const tags = [
    "Python Dev",
    "Javascript",
    "Front End",
    "Back End",
    "iOS Development",
    "+12",
  ];
  return (
    <div className="relative flex-shrink-0 w-full max-w-[451px] mx-auto lg:mx-0">
      <div
        className="feature-card"
        style={{
          borderRadius: "34px",
          padding: "24px",
          minHeight: "480px",
          position: "relative",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Decorative dot */}
        <div
          style={{
            position: "absolute",
            top: "-11px",
            left: "-35px",
            width: "22px",
            height: "22px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #52B4DA, #1E3E85)",
          }}
          aria-hidden="true"
        />

        {/* Profile image with video overlay */}
        <div
          className="rounded-2xl overflow-hidden mb-4"
          style={{ height: '176px', position: 'relative' }}
        >
          <img src="/assets/093143066a0755f54b00b4e3297b09f3b9e4136a.png" alt="Profile Mockup" className="w-full h-full object-cover" />
          {/* Video play button overlay */}
          <div
            className="absolute"
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "57px",
              height: "57px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #5799eb 0%, #9F74FB 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 4px 20px rgba(87,153,235,0.4)",
              cursor: "pointer",
              zIndex: 10,
            }}
            aria-label="Play intro video"
            role="button"
          >
            <PlayIcon />
          </div>
        </div>

        {/* Skill tags */}
        <div className="flex flex-wrap gap-2 mb-5" style={{ flex: "0 0 auto" }}>
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-lg text-xs font-medium px-3 py-2"
              style={{
                background:
                  "linear-gradient(159.45787898572019deg, rgba(87,153,235,0.1) 5.6274%, rgba(159,116,251,0.1) 106.18%)",
                fontFamily: "Poppins, sans-serif",
                fontWeight: 500,
                fontSize: "12px",
                lineHeight: "21px",
              }}
            >
              <span style={{
                background: "linear-gradient(168.929deg, #336DA6 6.8672%, #1E3E85 106.04%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                {tag}
              </span>
            </span>
          ))}
        </div>

        {/* Feedback pill - pushed to bottom */}
        <div
          className="pill-card flex items-center gap-3"
          style={{
            padding: "10px 16px",
            borderRadius: "36.5px",
            marginTop: "auto",
            flex: "0 0 auto",
          }}
        >
          <div
            style={{
              width: "44px",
              height: "44px",
              borderRadius: "50%",
              background:
                "linear-gradient(132.559deg, #FFED43 5.6%, #F29939 106%)",
              flexShrink: 0,
              overflow: "hidden",
            }}
          >
            <img
              src="/assets/guru.png"
              alt="Past Client"
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
            />
          </div>
          <div>
            <p
              className="m-0 font-semibold text-xs whitespace-nowrap"
              style={{
                color: "#1E3E85",
                fontFamily: "Poppins, sans-serif",
                lineHeight: "21px",
              }}
            >
              Past Client Feedback
            </p>
            <p
              className="m-0 font-medium text-[17px]"
              style={{
                color: "#11142D",
                fontFamily: "Poppins, sans-serif",
                lineHeight: "24px",
              }}
            >
              Best Developer Ever!
            </p>
          </div>
        </div>
      </div>

      {/* Floating Gru avatar badge — right side of card */}
      <div
        className="absolute float-animation"
        style={{
          top: "120px",
          right: "-46px",
          width: "91px",
          height: "91px",
          borderRadius: "45.5px",
          background: "linear-gradient(132.559deg, #52B4DA 5.6%, #1E3E85 106%)",
          boxShadow: "14px 41px 50px 0px rgba(49,89,211,0.07)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          zIndex: 10,
        }}
        aria-hidden="true"
      >
        <img
          src="/assets/guru.png"
          alt="Gru"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center top",
            borderRadius: "45.5px",
          }}
        />
      </div>
    </div>
  );
};
