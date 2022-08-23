import styled from 'styled-components'

export const CardLayout = styled.div`
  width: 271.95px;
  height: 494px;
  left: 1044px;
  border: 1px solid #e4e4e4;
  border-radius: 14px;
`

export const CardHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
  wordBreak: break-all;
`
export const CardBody = styled.div`
  position: relative;
  bottom: 0;
  left: 0;
`
export const ImageLayout = styled.span`
  display: flex;
  position: relative;
  width: 100%;
  height: 222px;
  text-align: center;
  justify-content: center;
  padding-top: 42px;
`
export const Image = styled.img`
  max-height: 180px;
`
export const ColorList = styled.ul`
  list-style: none;
  position: absolute;
  left: -15px;
  top: 48px;
}
`
export const Color = styled.li`
  width: 12px;
  height: 12px;
  margin-bottom: 6px;
  border: 1px solid #d6d6d6;
  border-radius: 100%;
  background-color: ${(props) => props.background || "#3c3533"};
`
export const Title = styled.p`
  overflow: hidden;
  width: 250px;
  height: 39px;
  font-size: 18px;
  padding: 12px 0 0 24px;
  font-weight: 400;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin : 0;
`
export const SubTitle = styled.p`
  width: 250px;
  margin-top: -10px;
  padding: 0 0 0 24px;
  font-size: 12px;
  word-break: break-all;
  color: #666;
`
export const PlanLayout = styled.div`
  position: relative;
  bottom: 0;
  left: 0;
`
export const PhoneMoney = styled.div`
  padding: 12px 24px 0;
  font-size: 12px;
  letter-spacing: -.2px;
`
export const PlanMoney = styled.div`
  width: 100%;
  padding: 0 24px;
  font-size: 12px;
  letter-spacing: -.2px;
`
export const TotalMoney = styled.div`
  display: inline-block;
  width: 100%;
  padding: 4px 24px 0;
  font-size: 24px;
  letter-spacing: -.2px;
  font-weight: 700;
`
export const CardFooter = styled.div`
  width: 224px;
  height: 59px;
  border-top: 1px solid #eee;
  margin: 13px 28px 0;
  position: relative;
`
export const OrderNumber = styled.span`
  font-size: 12px;
  position: absolute;
  bottom: 16px;
  left: 0;
`
export const CompareButton = styled.span`
  display: inline-block;
  width: 96px;
  height: 32px;
  text-align: center;
  border-radius: 60px;
  font-size: 14px;
  position: absolute;
  left: 94px;
  bottom: 14px;
`
export const CompareText = styled.a`
  display: inline-block;
  width: 96px;
  height: 32px;
  border: 1px solid #bbb;
  padding-top: 10px;
  border-radius: 60px;
  font-size: 14px;
  color: #000;
  background: none;
`