import { Card, Typography } from "@material-tailwind/react";

const TABLE_HEAD = [
  "Transaction-ID",
  "Date/Time",
  "Customer-Number",
  "Transaction Type",
  "Amount",
  "Agent Commission",
  "Status",
];

const AgentTransactions = () => {
  return (
    <section>
    {/* <Helmet>
    <title>NovaHomes | Admin Manage Agent Added Properties , Page</title>
  </Helmet> */}
    {/* <>
    <DynamicTitleDesc
      title={"Property Verification Control Center"}
      subTitle={
        "Empower administrative control over agent-added properties with advanced verification tools. Review, verify, or reject properties with precision. Enhance platform integrity by ensuring only verified properties are showcased, providing users with trusted listings."
      }
    />
  </> */}
    <div className="w-[90%] mx-auto mb-10 mt-16">
      <Card className="h-full w-full overflow-scroll">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-b border-[#39474F] bg-[#1C444D] p-4"
                >
                  <Typography
                    variant="small"
                    color="white"
                    className="font-bold text-lg leading-none opacity-80"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {/* {allProperties.map(
            (
              {
                propertyTitle,
                propertyLocation,
                agentName,
                agentEmail,
                minPrice,
                maxPrice,
                _id,
                verificationStatus,
              },
              index
            ) => {
              const isLast = index === allProperties.length - 1;
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50";

              return (
                <tr key={_id} className="hover:bg-amber-500">
                  <td className={classes}>
                    <Typography
                      variant="paragraph"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {propertyTitle}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="paragraph"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {propertyLocation}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="paragraph"
                      color="blue-gray"
                      className="font-normal flex justify-center"
                    >
                      {agentName}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="paragraph"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {agentEmail}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="paragraph"
                      color="blue-gray"
                      className="font-normal"
                    >
                      <span>${minPrice}</span> - <span>${maxPrice}</span>
                    </Typography>
                  </td>
                  <td className={classes}>
                    {verificationStatus === "Rejected" ? (
                      <p className="text-base font-bold text-red-600 bg-red-100/90 text-center rounded-full px-3">
                        Rejected
                      </p>
                    ) : (
                      <>
                        {verificationStatus === "Verified" ? (
                          <Typography className="flex justify-center">
                            <p className="text-base font-bold text-green-600 bg-green-100/90 text-center rounded-full px-3">
                              Verified
                            </p>
                          </Typography>
                        ) : (
                          <Typography
                            color="green"
                            className="font-normal flex justify-center"
                          >
                            <FaCheckSquare
                              onClick={() => handleVerify(_id)}
                              className="text-2xl md:text-3xl hover:scale-125 transition-all cursor-pointer"
                            />
                          </Typography>
                        )}
                      </>
                    )}
                  </td>
                  <td className={classes}>
                    {verificationStatus === "Verified" ? (
                      <Typography className="flex justify-center">
                        <p className="text-base font-bold text-green-600 bg-green-100/90 text-center rounded-full px-3">
                          Verified
                        </p>
                      </Typography>
                    ) : (
                      <>
                        {verificationStatus === "Rejected" ? (
                          <p className="text-base font-bold text-red-600 bg-red-100/90 text-center rounded-full px-3">
                            Rejected
                          </p>
                        ) : (
                          <Typography
                            color="red"
                            className="font-normal flex justify-center"
                          >
                            <IoIosCloseCircle
                              onClick={() => handleReject(_id)}
                              className="text-3xl md:text-4xl hover:scale-125 transition-all cursor-pointer"
                            />
                          </Typography>
                        )}
                      </>
                    )}
                  </td>
                </tr>
              );
            }
          )} */}
            <tr className="hover:bg-amber-500">
              <td>
                <Typography
                  variant="paragraph"
                  color="blue-gray"
                  className="font-normal"
                >
                  helo
                </Typography>
              </td>
              <td>
                <Typography
                  variant="paragraph"
                  color="blue-gray"
                  className="font-normal"
                >
                  hleo
                </Typography>
              </td>
              <td>
                <Typography
                  variant="paragraph"
                  color="blue-gray"
                  className="font-normal flex justify-center"
                >
                  lsdkfjsdlf
                </Typography>
              </td>
              <td>
                <Typography
                  variant="paragraph"
                  color="blue-gray"
                  className="font-normal"
                >
                  sdfsdfsdf
                </Typography>
              </td>
              <td>
                <Typography
                  variant="paragraph"
                  color="blue-gray"
                  className="font-normal"
                >
                  sdfsdfsdf
                </Typography>
              </td>
              <td>
                <Typography
                  variant="paragraph"
                  color="blue-gray"
                  className="font-normal"
                >
                  sdfsdfsdf
                </Typography>
              </td>
              <td>
                <Typography
                  variant="paragraph"
                  color="blue-gray"
                  className="font-normal"
                >
                  sdfsdfsdf
                </Typography>
              </td>
            </tr>
          </tbody>
        </table>
      </Card>
    </div>
  </section>
  );
};

export default AgentTransactions;