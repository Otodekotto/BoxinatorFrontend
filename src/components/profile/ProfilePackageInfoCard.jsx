import * as React from "react"
import PackageActionCard from "./PackageActionCard"
import PackagesImage from "../../img/Packages.jpg"
import PackageDelivered from "../../img/PackageDelivered.jpg"
import CancelledPackage from "../../img/Cancelled.jpg"

const ProfilePackageInfoCard = () => {
  const cardData = [
    {
      image: PackagesImage,
      title: "Total Package",
      description:
        "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    },
    {
      image: PackageDelivered,
      title: "Completed",
      description: "Description of another animal",
    },
    {
      image: CancelledPackage,
      title: "Cancelled",
      description: "Description of yet another animal",
    },
  ]

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "1rem",
      }}
    >
      {cardData.map((data, index) => (
        <PackageActionCard key={index} {...data} />
      ))}
      <div>
        <br></br>
        <br></br>
      </div>
    </div>
  )
}

export default ProfilePackageInfoCard
