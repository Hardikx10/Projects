
import { Card } from "@repo/ui/card"

// export const p2pTransactionsComponent = ({
//     p2pTransactions
// }: {
//     p2pTransactions: {
//         amount: number,
//         fromUserId: number,
//         toUserId:number,
//         timestamp:Date
//     }[]
// }) => {
//     if (!p2pTransactions.length) {
//         return <Card title="Recent Transactions">
//             <div className="text-center pb-8 pt-8">
//                 No Recent transactions
//             </div>
//         </Card>
//     }
//     return <Card title="Recent Transactions">
//         <div className="pt-2">
//             {p2pTransactions.map(t => <div className="flex justify-between">
//                 <div>
//                     <div className="text-sm">
//                         Received INR
//                     </div>
//                     <div className="text-slate-600 text-xs">
//                         {t.time.toDateString()}
//                     </div>
//                 </div>
//                 <div className="flex flex-col justify-center">
//                     + Rs {t.amount / 100}
//                 </div>

//             </div>)}
//         </div>
//     </Card>
// }