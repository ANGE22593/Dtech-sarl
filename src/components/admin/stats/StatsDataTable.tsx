
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface TableColumn {
  key: string;
  header: string;
  render?: (value: any, row: any) => React.ReactNode;
}

interface DataTableProps {
  columns: TableColumn[];
  data: any[];
  emptyMessage?: string;
}

const StatsDataTable: React.FC<DataTableProps> = ({
  columns,
  data,
  emptyMessage = "Aucune donnée disponible",
}) => {
  if (!data.length) {
    return <div className="text-center py-6 text-gray-500">{emptyMessage}</div>;
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          {columns.map((column) => (
            <TableHead key={column.key}>{column.header}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((row, rowIndex) => (
          <TableRow key={rowIndex}>
            {columns.map((column) => (
              <TableCell key={`${rowIndex}-${column.key}`}>
                {column.render
                  ? column.render(row[column.key], row)
                  : row[column.key]}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default StatsDataTable;
