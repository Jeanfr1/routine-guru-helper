import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "@/integrations/supabase/client";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";

const Login = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN' && session) {
        navigate("/");
      }
      if (event === 'USER_UPDATED' && session) {
        navigate("/");
      }
      // Handle signup error
      if (event === 'SIGNED_UP.ERROR') {
        const error = session as any; // Type assertion for error handling
        if (error?.error?.message?.includes('User already registered')) {
          toast({
            title: "Account Already Exists",
            description: "Please sign in instead of creating a new account.",
            variant: "destructive",
          });
        }
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate, toast]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#D3E4FD] to-[#FFDEE2] flex items-center justify-center p-4 animate-gradient-x">
      <div className="w-full max-w-md transform transition-all duration-300 hover:scale-[1.02]">
        <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-8 animate-fade-in">
          <h1 className="text-3xl font-bold text-center mb-2 bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
            Welcome Back
          </h1>
          <p className="text-center text-gray-600 mb-8">
            Sign in to manage your tasks effectively
          </p>
          <Auth
            supabaseClient={supabase}
            appearance={{
              theme: ThemeSupa,
              variables: {
                default: {
                  colors: {
                    brand: 'rgb(155, 135, 245)',
                    brandAccent: 'rgb(139, 112, 243)',
                    brandButtonText: 'white',
                  },
                  borderWidths: {
                    buttonBorderWidth: '0px',
                    inputBorderWidth: '1px',
                  },
                  radii: {
                    borderRadiusButton: '8px',
                    buttonBorderRadius: '8px',
                    inputBorderRadius: '8px',
                  },
                },
              },
              className: {
                button: 'hover:scale-[1.02] transition-transform duration-200',
                container: 'gap-4',
                input: 'transition-all duration-200 focus:ring-2 focus:ring-primary/20',
              },
            }}
            providers={[]}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;