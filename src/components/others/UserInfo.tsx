import { useState } from "react";
import { Button } from "./../ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "./../ui/card";
import { Dialog, DialogTrigger } from "./../ui/dialog";
import { PlusCircle } from "lucide-react";
import UpdateUserInfo from "./../modals/UpdateUserInfo";

const UserInfo = ({ userData }) => {
  const [open, setOpen] = useState(false);

  const { name, email, phone, address } = userData;

  return (
    <Card className="max-w-[280px]">
      <CardHeader>User Information</CardHeader>
      <CardContent>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
        <p>Address: {address}</p>
      </CardContent>
      <CardFooter>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button size="sm" className="h-8 gap-1">
              <PlusCircle className="h-3.5 w-3.5" />
              <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                Update
              </span>
            </Button>
          </DialogTrigger>
          <UpdateUserInfo data={userData} setOpen={setOpen} />
        </Dialog>
      </CardFooter>
    </Card>
  );
};

export default UserInfo;
