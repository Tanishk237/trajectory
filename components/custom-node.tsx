import { memo } from "react"
import { Handle, Position } from "reactflow"

function CustomNode({ data }) {
  return (
    <div className="px-4 py-2 shadow-md rounded-md bg-yellow-50 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-800 min-w-[150px]">
      <div className="font-bold text-center">{data.label}</div>
      <Handle type="target" position={Position.Top} className="w-2 h-2 bg-blue-500 dark:bg-blue-400" />
      <Handle type="source" position={Position.Bottom} className="w-2 h-2 bg-blue-500 dark:bg-blue-400" />
    </div>
  )
}

export default memo(CustomNode)

