import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import axios from "axios";
import { useState } from "react";

const formSchema = z.object({
  email: z.string().min(2).max(50).email(),
  message: z.string().min(5).max(500),
});

const Contact = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState<boolean>(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setLoading(true);
    try {
      const response = await axios.post("https://formspree.io/f/mkgwwpny", {
        email: values.email,
        message: values.message,
      });
      console.log(response.data);
      toast({
        title: "Your message has been sent!",
        description: "We'll get back to you shortly.",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Your message can't be sent!",
        description: "We'll get back to you shortly.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main
      className="pt-[80px] flex flex-col items-stretch justify-start gap-y-8"
    >
      <header className="w-full">
        <h1 className="text-xl sm:text-2xl md:text-4xl font-semibold relative w-fit before:absolute before:w-full before:h-[4px] before:rounded-full before:top-full before:bg-light">
          Contact
        </h1>
      </header>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea placeholder="Your message here" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="flex items-center justify-center gap-x-4 text-base"
            disabled={loading ? true : false}
          >
            {loading ? (
              "Loading..."
            ) : (
              <>
                Submit <Send />
              </>
            )}
          </Button>
        </form>
      </Form>
    </main>
  );
};

export default Contact;
