
import Image from "next/image";
import bgImage from "../../../public/home/ProcessImage-1.png";
import rightImage from "../../../public/home/ProcessImage-2.png";
// import rightImage from "../../../public/home/

export default function CustomProcess() {
    const steps = [
        {
            title: "Dyeing",
            desc: "Adding color to fabric with eco-friendly process",
        },
        {
            title: "Cutting",
            desc: "Perfect cutting according to measurements",
        },
        {
            title: "Sewing",
            desc: "High-quality stitching with skilled workers",
        },
        {
            title: "Threading",
            desc: "Strong threading for long durability",
        },
        {
            title: "Ironing",
            desc: "Finishing touch with modern ironing",
        },
        {
            title: "Packaging",
            desc: "Safe and attractive product packaging",
        },
    ];

    return (
        <section className=" py-20">
            <div className="max-w-7xl mx-auto px-4">

                {/* ===== TOP CTA SECTION ===== */}

                {/* Overlay */}
                <div className="bg-[#eaf6f6] max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">

                    {/* ===== LEFT CONTENT ===== */}
                    <div
                        className=" relative rounded-xl overflow-hidden mb-16 "
                        style={{
                            backgroundImage: `url(${bgImage.src})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    >
                        {/* TOP BUTTON */}
                        <button className="mb-4 inline-block bg-teal-500 text-white text-sm px-4 py-2 rounded hover:bg-teal-600 transition">
                            Custom Project
                        </button>

                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                            Do You Want Custom Project With Textilery?
                        </h2>

                        <p className="text-gray-200 mb-6 max-w-md">
                            We deliver premium-quality garments with ethical and sustainable
                            manufacturing processes tailored to your needs.
                        </p>

                        {/* BOTTOM BUTTON */}
                        <button className="bg-white text-teal-600 font-semibold px-6 py-3 rounded hover:bg-gray-100 transition">
                            Contact Now
                        </button>
                    </div>

                    {/* ===== RIGHT IMAGE ===== */}
                    <div className="hidden md:flex justify-end">
                        <Image
                            src={rightImage}
                            alt="Garments Preview"
                            className="object-contain w-[380px] lg:w-[420px]"
                            priority
                        />
                    </div>
                </div>

                {/* ===== PROCESS STEPS ===== */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    {steps.map((step, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-lg border p-6 text-center hover:shadow-md transition"
                        >
                            <h3 className="font-semibold text-lg mb-2">
                                {step.title}
                            </h3>
                            <p className="text-sm text-gray-600">
                                {step.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
