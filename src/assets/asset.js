import white_logo from "/images/brand/white_logo.svg";
import dark_logo from "/images/brand/dark_logo.svg";
import logo from "/images/brand/logo.svg";
import dark_icon from "/images/brand/dark_icon.svg";
import white_icon from "/images/brand/white_icon.svg";

import minhealth from "/images/partner/minhealth.png";
import ur from "/images/partner/ur.avif";
import who from "/images/partner/who.png";

import vidbg from "/images/img/cover.webp";
import play from "/images/img/play.svg";

import {
  LuGlobe,
  LuHeart,
  LuShield,
  LuStethoscope,
  LuTrendingUp,
  LuUsers,
} from "react-icons/lu";

export const assets = {
  brand: {
    white_logo,
    white_icon,
    dark_logo,
    dark_icon,
    logo,
  },

  partner: {
    who,
    ur,
    minhealth,
  },

  vidbg,
  play_icon: play,
};

export const partners = [ur, minhealth, who];

export const features = [
  {
    icon: LuStethoscope,
    title: "AI Health Detection",
    description:
      "Advanced machine learning algorithms analyze growth patterns and detect early signs of malnutrition",
  },

  {
    icon: LuUsers,
    title: "Family-Centered Care",
    description:
      "Empower parents with easy-to-use tools for tracking their children's nutrition and growth milestones",
  },

  {
    icon: LuShield,
    title: "Health Advisor Support",
    description:
      "Professional tools for healthcare workers to monitor village-level health data and provide guidance",
  },

  {
    icon: LuTrendingUp,
    title: "Growth Tracking",
    description:
      "Comprehensive dashboards with charts and predictive insights for monitoring child development",
  },

  {
    icon: LuGlobe,
    title: "Multi-Country Scalable",
    description:
      "Geographic hierarchy system designed to scale from Rwanda to multiple countries worldwide",
  },

  {
    icon: LuHeart,
    title: "Emergency Response",
    description:
      "Instant messaging system for urgent health concerns with direct connection to local health advisors",
  },
];

export const childrenList = [
  {
    id: "3a8e112b-dfc4-41f4-973b-12f226167e92",
    fullname: "Mukamana Alice",
    email: "alice@example.com",
    phone: "+250788123456",
    village: "Kabeza",
    cell: "Kimironko",
    sector: "Gasabo",
    district: "Gasabo",
    province: "Kigali",
    country: "Rwanda",
    notifications: [
      {
        isRead: true,
        title: "New Insights",
        description: "Please your requested insights aleady sent",
      },
      {
        isRead: false,
        title: "New Insights",
        description: "Please your requested insights aleady sent",
      },
    ],
    children: [
      {
        id: "2f8378c4-622d-4871-b4df-10c14f0b2d8a",
        name: "Amahoro Ange",
        birthday: "2022-05-10",
        gender: "Female",
        measurements: [
          {
            date: "2025-06-17",
            weightKg: 12.3,
            heightCm: 86.5,
            muacCm: 14.5,
          },
        ],
        aiInsights: {
          bio: "Normal growth pattern observed. Maintain regular checkups.",
          description:
            "Amahoro's recent health metrics indicate stable growth. MUAC and BMI are within healthy ranges. She is developing normally for her age.",
          recommendations: [
            "Continue a balanced diet with fruits and vegetables",
            "Regular play and physical activity",
            "Routine clinic visits every 4–6 weeks",
          ],
        },
      },
      {
        id: "ca6f543e-1d0c-4b9a-a720-271d27c57f92",
        name: "Kwizera Hertier",
        birthday: "2021-04-02",
        gender: "Male",
        measurements: [
          {
            date: "2025-06-14",
            weightKg: 13.8,
            heightCm: 80.0,
            muacCm: 12.1,
          },
        ],
        aiInsights: {
          bio: "MUAC slightly low. Monitor nutrition closely.",
          description:
            "Kwizera's MUAC measurement indicates a risk of moderate acute malnutrition. His weight-to-height ratio is below the expected range.",
          recommendations: [
            "Increase intake of protein-rich foods like beans, eggs, fish",
            "Add energy-dense snacks such as groundnuts or avocado",
            "Monitor weight and MUAC weekly",
            "Visit a nutritionist if no improvement in 2 weeks",
          ],
        },
      },
    ],
  },
  {
    id: "6b6f7160-13a0-437e-a32e-31a183291acd",
    fullname: "Nshimiyimana John",
    email: "john.nshimiyimana@example.com",
    phone: "+250784654321",
    village: "Rugarama",
    cell: "Gisozi",
    sector: "Gisozi",
    district: "Gasabo",
    province: "Kigali",
    country: "Rwanda",
    notifications: 0,
    children: [
      {
        id: "f1f5f66e-098f-4f91-812e-d6a117e42e7f",
        name: "Teta",
        birthday: "2022-07-01",
        gender: "Female",
        measurements: [
          {
            date: "2025-06-12",
            weightKg: 13.1,
            heightCm: 91.2,
            muacCm: 13.8,
          },
        ],
        aiInsights: {
          bio: "Healthy indicators. Continue current nutritional care.",
          description:
            "Teta is growing well and consistently meeting growth targets. BMI and MUAC are within the normal range, and no risk factors were detected.",
          recommendations: [
            "Maintain diet rich in iron and vitamin A (e.g., spinach, mango)",
            "Support continued breastfeeding if applicable",
            "Track development milestones monthly",
          ],
        },
      },
    ],
  },
];

export const dailyNutritionTips = [
  "Include iron-rich foods like beans, spinach, and eggs in your child's meals to support healthy growth and development.",
  "Offer a variety of colorful fruits and vegetables daily to provide essential vitamins and minerals.",
  "Encourage your child to drink clean, safe water throughout the day to stay hydrated.",
  "Limit sugary snacks and drinks; choose fresh fruit or nuts as healthy alternatives.",
  "Incorporate protein sources such as fish, chicken, eggs, or legumes in every meal.",
  "Serve whole grains like maize, brown rice, or millet for sustained energy.",
  "Add healthy fats from avocados, groundnuts, or small amounts of vegetable oil to meals.",
  "Practice regular meal times and avoid skipping breakfast to maintain energy levels.",
  "Wash hands with soap before preparing food and before eating to prevent illness.",
  "Continue breastfeeding for children under two years, alongside complementary foods.",
  "Encourage active play and outdoor activities to support physical and mental development.",
  "Monitor your child's growth regularly and seek advice from health professionals if concerned.",
  "Avoid giving processed or packaged foods high in salt and unhealthy fats.",
  "Teach children to eat slowly and recognize when they are full to prevent overeating.",
  "Prepare meals at home as much as possible to control ingredients and portion sizes.",
];
export const getDailyNutritionTip = () => {
  const tips = dailyNutritionTips;
  const now = new Date();

  // Get number of full days since Unix Epoch
  const daysSinceEpoch = Math.floor(now.getTime() / (1000 * 60 * 60 * 24));

  // Use modulus to loop through tips
  const index = daysSinceEpoch % tips.length;

  return tips[index];
};

export const WhoDatasetStds = [
  {
    gender: "Female",
    ageMonths: 0,
    medianHeightCm: 49.1,
    sdHeightCm: 1.9,
    medianWeightKg: 3.3,
    sdWeightKg: 0.12,
  },
  {
    gender: "Female",
    ageMonths: 1,
    medianHeightCm: 54.7,
    sdHeightCm: 2.4,
    medianWeightKg: 4.5,
    sdWeightKg: 0.15,
  },
  // ...
  {
    gender: "Female",
    ageMonths: 24,
    medianHeightCm: 85.7,
    sdHeightCm: 3.2,
    medianWeightKg: 12.3,
    sdWeightKg: 1.1,
  },
  {
    gender: "Female",
    ageMonths: 60,
    medianHeightCm: 109.2,
    sdHeightCm: 3.7,
    medianWeightKg: 18.3,
    sdWeightKg: 1.5,
  },

  {
    gender: "Male",
    ageMonths: 0,
    medianHeightCm: 49.9,
    sdHeightCm: 1.9,
    medianWeightKg: 3.5,
    sdWeightKg: 0.13,
  },
  {
    gender: "Male",
    ageMonths: 1,
    medianHeightCm: 56.0,
    sdHeightCm: 2.5,
    medianWeightKg: 4.8,
    sdWeightKg: 0.16,
  },
  // ...
  {
    gender: "Male",
    ageMonths: 24,
    medianHeightCm: 87.1,
    sdHeightCm: 3.3,
    medianWeightKg: 12.5,
    sdWeightKg: 1.2,
  },
  {
    gender: "Male",
    ageMonths: 60,
    medianHeightCm: 109.9,
    sdHeightCm: 3.9,
    medianWeightKg: 18.9,
    sdWeightKg: 1.6,
  },
  {
    gender: "Female",
    ageMonths: 25,
    medianHeightCm: 90,
    sdHeightCm: 3.5,
    medianWeightKg: 12,
    sdWeightKg: 1.2,
  },
  {
    gender: "Male",
    ageMonths: 50,
    medianHeightCm: 110,
    sdHeightCm: 3.9,
    medianWeightKg: 18.2,
    sdWeightKg: 1.6,
  },
];

// FUNCTIONS

// firstname
export const getFirstName = (fullName) =>
  fullName.split(" ")[1] || fullName.split(" ")[0];

export const getAgeInMonths = (birthday, measureDate) => {
  const birth = new Date(birthday);
  const date = new Date(measureDate);
  return Math.floor((date - birth) / (1000 * 60 * 60 * 24 * 30.44));
};

export const getWHOStd = (gender, ageMonths) => {
  return WhoDatasetStds.find(
    (std) => std.gender === gender && std.ageMonths === ageMonths
  );
};

export const getLastMeasured = (lastMeasurementDate) => {
  const now = new Date();
  const past = new Date(lastMeasurementDate);
  const diffMs = now - past;

  const seconds = Math.floor(diffMs / 1000);
  if (seconds < 60) return `${seconds} sec${seconds !== 1 ? "s" : ""} ago`;

  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes} min${minutes !== 1 ? "s" : ""} ago`;

  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours} hour${hours !== 1 ? "s" : ""} ago`;

  const days = Math.floor(hours / 24);
  if (days < 7) return `${days} day${days !== 1 ? "s" : ""} ago`;

  const weeks = Math.floor(days / 7);
  return `${weeks} week${weeks !== 1 ? "s" : ""} ago`;
};

export const getZScore = (observed, median, sd) => {
  sd === 0 ? 0 : (observed - median) / sd;
};

export const getStunting = (child) => {
  const latest = getLatestMeasurement(child.measurements);
  if (!latest) return "No data";

  const ageMonths = getAgeInMonths(child.birthday, latest.date);
  const who = getWHOStd(child.gender, ageMonths);
  if (!who) return " WHO data missing";

  const haz = getZScore(latest.heightCm, who.medianHeightCm, who.sdHeightCm);
  if (haz < -3) return "Severely Stunted";
  if (haz < -2) return "Stunted";
  return "Normal";
};

export const getWasting = (child) => {
  const latest = getLatestMeasurement(child.measurements);
  if (!latest) return "No data";

  const ageMonths = getAgeInMonths(child.birthday, latest.date);
  const who = getWHOStd(child.gender, ageMonths);
  if (!who) return "WHO data missing";

  const whz = getZScore(latest.weightKg, who.medianWeightKg, who.sdWeightKg);
  if (whz < -3) return "Severely Wasted";
  if (whz < -2) return "Wasted";
  return "Normal";
};

export const getAcuteMUAC = (muacCm) => {
  if (muacCm < 11.5) {
    return {
      classification: "Severe Acute Malnutrition (SAM)",
      interpretation: "High risk of death, urgent intervention",
      action: "Refer for therapeutic feeding or inpatient care",
    };
  } else if (muacCm >= 11.5 && muacCm < 12.5) {
    return {
      classification: "Moderate Acute Malnutrition (MAM)",
      interpretation: "Moderate risk, needs treatment",
      action: "Enroll in Supplementary Feeding Program (SFP)",
    };
  } else {
    return {
      classification: "Normal",
      interpretation: "Low immediate risk",
      action: "Regular monitoring and counseling",
    };
  }
};

export const getAiInsight = ({ stuntingStatus, wastingStatus, muacCm }) => {
  const recommendations = [];

  if (stuntingStatus === "Severely Stunted" || stuntingStatus === "Stunted") {
    recommendations.push(
      "Increase intake of protein-rich foods (beans, eggs, dairy).",
      "Encourage regular growth monitoring at health facilities."
    );
  }

  if (wastingStatus === "Severely Wasted" || wastingStatus === "Wasted") {
    recommendations.push(
      "Provide high-energy therapeutic foods as recommended.",
      "Ensure frequent small meals and hydration."
    );
  }

  const muacClassification = getAcuteMUAC(muacCm);
  if (muacClassification.classification !== "Normal") {
    recommendations.push(muacClassification.action);
  }

  if (recommendations.length === 0) {
    return {
      title: "Healthy Growth",
      description:
        "Your child is showing normal growth indicators. Keep up the good work!",
      recommendations: [
        "Maintain a balanced diet and regular health checkups.",
      ],
    };
  }

  return {
    title: "Nutrition Alert",
    description:
      "Your child shows signs of malnutrition and requires attention.",
    recommendations,
  };
};

export const getBMI = (weightKg, heightCm) => {
  if (!weightKg || !heightCm) return null;

  const heightM = heightCm / 100;

  return weightKg && heightCm
    ? (weightKg / (heightM * heightM)).toFixed(1)
    : "No data";
};

export const getLatestMeasurement = (measurements) => {
  if (!measurements || measurements.length === 0) return null;
  return measurements.reduce((latest, current) =>
    new Date(current.date) > new Date(latest.date) ? current : latest
  );
};

export const getChildAge = (birthday) => {
  const birthDate = new Date(birthday);
  const today = new Date();

  const diffMs = today - birthDate;
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const diffWeeks = Math.floor(diffDays / 7);
  const diffMonths =
    today.getMonth() -
    birthDate.getMonth() +
    12 * (today.getFullYear() - birthDate.getFullYear());
  const diffYears = today.getFullYear() - birthDate.getFullYear();

  if (diffDays < 7) {
    return `${diffDays} day${diffDays === 1 ? "" : "s"}`;
  } else if (diffWeeks < 4) {
    return `${diffWeeks} week${diffWeeks === 1 ? "" : "s"}`;
  } else if (diffMonths < 24) {
    return `${diffMonths} month${diffMonths === 1 ? "" : "s"}`;
  } else {
    return `${diffYears} year${diffYears === 1 ? "" : "s"}`;
  }
};
