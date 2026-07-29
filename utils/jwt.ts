import  jwt  from "jsonwebtoken"

export const verifyTkn = (token: string, secret: string) => {
  try {
    const decoded = jwt.verify(token, secret)

    return {
      success: true,
      data: decoded,
    }
  } catch (error: any) {
    // console.log(error);
    return {
      success: false,
      error: error.message || "Invalid Token",
    }
  }
}