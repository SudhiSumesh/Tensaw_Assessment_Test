import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
function ClinicDetails() {
  const location = useLocation();
  const details = location.state?.details;

  return (
    <div className="container mt-3 py-4">
      <div className="flex gap-6 ">
        {/* navigate back */}
        <Link to={"/"} className="mt-0.5">
          <FontAwesomeIcon icon={faArrowLeft} size="xl" />
        </Link>
        <h2 className="text-xl font-medium mb-4">Clinic Details</h2>
      </div>
      {/* clinic details sec */}
      <div className="px-12">

        <div className="md:flex md:gap-24 mt-3 mb-4  ">
          <div className="border-b-2 border-[#00000021] md:min-w-[500px] mb-2">
            <div className="text-md ">Clinic Name:</div>
            <div className="  font-medium text-lg py-1">
              {details?.clinicName}
            </div>
          </div>
          <div className="border-b-2  border-[#00000021] md:min-w-[500px] ">
            <div>Address:</div>
            <div className="font-medium text-lg py-1">{details?.address}</div>
          </div>
        </div>

        <div className="md:flex gap-12 ">
          <div className="border-b-2  border-[#00000021] min-w-[335px]">
            <div className="">City</div>
            <div className="font-medium text-lg py-1">{details?.city}</div>
          </div>
          <div className="border-b-2  border-[#00000021] min-w-[335px]">
            <div> State:</div>
            <div className="font-medium text-lg py-1">{details?.state}</div>
          </div>
          <div className="border-b-2  border-[#00000021] min-w-[330px]">
            <div>Zip:</div>{" "}
            <div className="font-medium text-lg py-1">{details?.zip}</div>
          </div>
        </div>

        <div className="md:flex gap-24 my-3">
          <div className="border-b-2  border-[#00000021] mb-2 md:min-w-[500px] ">
            <div> Phone:</div>
            <div className="font-medium lext-lg my-1">{details?.phone}</div>
          </div>
          <div className="border-b-2  border-[#00000021] md:min-w-[500px] ">
            <div>Email:</div>
            <div className="font-medium text-lg my-1">{details?.email}</div>
          </div>
        </div>

        <div className="md:flex gap-24">
          <div className="border-b-2  border-[#00000021] md:min-w-[500px]">
            <div>Frontdesk Name:</div>
            <div className="font-medium text-lg my-1">{details?.status}</div>
          </div>
          <div className="border-b-2  border-[#00000021] md:min-w-[500px] mt-2">
            <div> Office Manage Name:</div>
            <div className="font-medium text-lg my-1">
              {details?.officeManagerName}
            </div>
          </div>
        </div>

        <div className="md:flex gap-12 my-3">
          <div className="border-b-2  border-[#00000021] min-w-[335px]">
            <div>Physician Name</div>
            <div className="font-medium text-lg my-1">
              {details?.pysicianName}
            </div>
          </div>
          <div className="border-b-2  border-[#00000021] min-w-[335px]">
            <div>EMR name</div>
            <div className="font-medium text-lg my-1">{details?.emrName}</div>
          </div>

          <div className="border-b-2  border-[#00000021] md:min-w-[335px]">
            <div>Sales Person</div>
            <div className="font-medium lext-lg my-1">
              {details?.salesPerson}
            </div>
          </div>
        </div>

        <div className="md:flex gap-12">
          <div className="border-b-2  border-[#00000021] md:min-w-[335px]">
            Billing
            <div className="font-medium text-lg my-1">{details?.billing}</div>
          </div>   
          <div className="border-b-2  border-[#00000021] md:min-w-[335px] my-2">
            Length of current billing relationship
            <div className="font-medium text-lg my-1">
              {details?.durationOfRelationship}
            </div>
          </div>
          <div className="border-b-2  border-[#00000021] md:min-w-[335px]">
            <div>Last Visit</div>
            <div className="font-medium text-lg my-1">
              {/* mm/dd/yyyy format */}
              {details?.lastVisit &&
                new Date(details.lastVisit).toLocaleDateString("en-IN", {
                  month: "2-digit",
                  day: "2-digit",
                  year: "numeric",
                  timeZone: "Asia/Kolkata",
                })}
            </div>
          </div>
        </div>

        <div className="md:flex gap-12 my-3">
          <div className="border-b-2  border-[#00000021] md:min-w-[335px]">
            <div>Speciality</div>
            <div className="font-medium text-lg my-1">
              {details?.speciality}
            </div>
          </div>
          <div className="border-b-2  border-[#00000021] md:min-w-[335px] ">
            <div>Lead Status</div>
            <div className="font-medium text-lg my-1">{details?.status}</div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default ClinicDetails;
