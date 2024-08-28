import { File, ListFilter, MoreHorizontal, PlusCircle } from "lucide-react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { useGetServicesQuery } from "@/redux/features/services/serviceApi";

const ServiceDataTable = () => {
  const { data: serviceData = [], isLoading } = useGetServicesQuery({});

  // console.log("serviceData", serviceData);
  if (isLoading) return <div>Loading...</div>;

  return (
    <Card x-chunk="dashboard-06-chunk-0">
            <CardHeader>
              <CardTitle>Services</CardTitle>
              <CardDescription>
                Manage your services and view their sales performance.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="hidden w-[100px] sm:table-cell">
                      <span className="sr-only">img</span>
                    </TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead className="hidden md:table-cell">
                      Duration
                    </TableHead>
                    <TableHead className="hidden md:table-cell">
                      Price
                    </TableHead>
                    <TableHead className="hidden md:table-cell">
                      Created at
                    </TableHead>
                    <TableHead>
                      <span className="sr-only">Actions</span>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {serviceData?.data?.map((service) => {
                    const {
                      name,
                      imgUrl,
                      description,
                      price,
                      duration,
                      createdAt,
                    } = service;
                    return (
                      <TableRow>
                        <TableCell className="hidden sm:table-cell">
                          <img
                            alt="Product img"
                            className="aspect-square rounded-md object-cover"
                            height="64"
                            src={imgUrl}
                            width="64"
                          />
                        </TableCell>
                        <TableCell className="font-medium">{name}</TableCell>
                        <TableCell>{description}</TableCell>
                        <TableCell className="hidden md:table-cell">
                          {duration}
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          ${price}
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          {new Date(createdAt).toLocaleDateString()}
                        </TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button
                                aria-haspopup="true"
                                size="icon"
                                variant="ghost"
                              >
                                <MoreHorizontal className="h-4 w-4" />
                                <span className="sr-only">Toggle menu</span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuItem>Edit</DropdownMenuItem>
                              <DropdownMenuItem>Delete</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter>
              <div className="text-xs text-muted-foreground">
                Showing <strong>1-10</strong> of{" "}
                <strong>{serviceData?.data?.length}</strong> services
              </div>
            </CardFooter>
          </Card>
  );
};

export default ServiceDataTable;
