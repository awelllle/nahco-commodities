import "./Metric.css";
import MetricImage from "../../assets/svg/metric-img.svg";
import { useEffect } from "react";

interface MetricItemProps {
  title: string;
  subtitle: string;
  value: string | number;
}

const MetricItem: React.FC<MetricItemProps> = ({ title, subtitle, value }) => (
  <div className="metric-item">
    <p className="text-[#3B6D3E] font-[500] text-[18px] text-center">{title}</p>
    <p className="text-[#3B6D3E] font-[500] text-[18px] text-center">
      {subtitle}
    </p>
    <p className="text-[#3B6D3E] font-[600] text-[36px] text-center mt-4">
      {value}
    </p>
  </div>
);

const Metric = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in-element");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show");
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="px-[50px] pt-[40px]">
      <div className="fade-in-element">
        <h2 className="text-[#166534] font-[700] text-[36px] text-center">
          Measuring Impact
        </h2>
        <p className="text-center font-[400] text-[14px] md:text-[20px] text-[#4B5563] mt-6">
          By tracking these metrics, we demonstrate our commitment to
          accountability, <br /> effectiveness, and driving positive change in
          the global marketplace.
        </p>
      </div>
      <div className="flex justify-center items-center min-h-screen">
        <div className="metric-card fade-in-element h-[617px] w-[1200px] rounded-[24px] border border-[#E5E7EB] p-[24px]">
          <div className="metric-content flex justify-between">
            <div className="numbers-container fade-in-element">
              <div className="flex justify-between gap-6">
                <MetricItem
                  title="Export Volume"
                  subtitle="(Tonnes/Month)"
                  value="1500"
                />
                <MetricItem title="Export Value" subtitle="($)" value="30M" />
              </div>
              <div className="flex justify-between gap-6 mt-3 md:mt-6">
                <MetricItem
                  title="Logistics Efficiency"
                  subtitle="(Days/Shipment)"
                  value="8"
                />
                <MetricItem
                  title="Processing Efficiency"
                  subtitle="(Units/Hour)"
                  value="100"
                />
              </div>
              <div className="flex justify-between gap-6 mt-3 md:mt-6">
                <MetricItem
                  title="Employee Productivity"
                  subtitle="(Units/Day)"
                  value="50"
                />
                <MetricItem
                  title="Order Fulfillment Rate"
                  subtitle="(%)"
                  value="98%"
                />
              </div>
            </div>
            <div className="metric-img fade-in-element">
              <img src={MetricImage} alt="Metric" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Metric;
