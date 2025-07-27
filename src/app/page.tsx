import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Check, Star, Users, Zap, Shield, TrendingUp } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-md dark:bg-slate-900/80 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-slate-900 dark:text-white">SkyAgent</h1>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">Features</a>
              <a href="#pricing" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">Pricing</a>
              <a href="#testimonials" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">Testimonials</a>
              <Button variant="outline">Sign In</Button>
              <Button>Get Started</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="secondary" className="mb-4">
              <Zap className="w-4 h-4 mr-2" />
              AI-Powered Assistant
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl dark:text-white">
              Meet your AI Agent
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
              Transform your workflow with intelligent automation. SkyAgent learns your patterns, 
              anticipates your needs, and handles complex tasks with precision.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" className="group">
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg">
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
              Everything you need to work smarter
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
              Powerful features designed to streamline your workflow and boost productivity.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-slate-900 dark:text-white">
                  <Users className="h-5 w-5 flex-none text-blue-600" />
                  Real-time Collaboration
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-slate-600 dark:text-slate-300">
                  <p className="flex-auto">
                    Work together seamlessly with your team. Share insights, coordinate tasks, 
                    and maintain context across all your conversations.
                  </p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-slate-900 dark:text-white">
                  <Shield className="h-5 w-5 flex-none text-blue-600" />
                  Enterprise Security
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-slate-600 dark:text-slate-300">
                  <p className="flex-auto">
                    Bank-level security with end-to-end encryption. Your data stays private 
                    and protected with enterprise-grade security measures.
                  </p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-slate-900 dark:text-white">
                  <TrendingUp className="h-5 w-5 flex-none text-blue-600" />
                  Seamless Integrations
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-slate-600 dark:text-slate-300">
                  <p className="flex-auto">
                    Connect with your favorite tools and platforms. From Slack to Salesforce, 
                    SkyAgent integrates with everything you use.
                  </p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
              Simple, transparent pricing
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
              Choose the plan that's right for you and your team.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-y-6 sm:mt-20 sm:max-w-none sm:grid-cols-2 lg:grid-cols-3">
            <Card className="relative">
              <CardHeader>
                <CardTitle>Starter</CardTitle>
                <CardDescription>Perfect for individuals and small teams</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$9</span>
                  <span className="text-slate-600 dark:text-slate-300">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    Up to 5 team members
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    Basic integrations
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    10GB storage
                  </li>
                </ul>
                <Button className="w-full mt-6">Get Started</Button>
              </CardContent>
            </Card>

            <Card className="relative border-blue-600">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-blue-600 text-white">Most Popular</Badge>
              </div>
              <CardHeader>
                <CardTitle>Professional</CardTitle>
                <CardDescription>For growing teams and businesses</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$29</span>
                  <span className="text-slate-600 dark:text-slate-300">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    Up to 25 team members
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    Advanced integrations
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    100GB storage
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    Priority support
                  </li>
                </ul>
                <Button className="w-full mt-6">Get Started</Button>
              </CardContent>
            </Card>

            <Card className="relative">
              <CardHeader>
                <CardTitle>Enterprise</CardTitle>
                <CardDescription>For large organizations</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$99</span>
                  <span className="text-slate-600 dark:text-slate-300">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    Unlimited team members
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    Custom integrations
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    Unlimited storage
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    24/7 dedicated support
                  </li>
                </ul>
                <Button className="w-full mt-6">Contact Sales</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
              Loved by teams worldwide
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
              See what our customers have to say about SkyAgent.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-3 gap-8 sm:mt-20 sm:max-w-none lg:mx-0 lg:max-w-none lg:grid-cols-12">
            <Card className="relative overflow-hidden lg:col-span-4 lg:row-span-2">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  "SkyAgent has completely transformed how our team works. The AI understands our 
                  workflow perfectly and has saved us countless hours."
                </p>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-slate-300 dark:bg-slate-600"></div>
                  <div className="ml-3">
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">Sarah Chen</p>
                    <p className="text-sm text-slate-600 dark:text-slate-300">Product Manager, TechCorp</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden lg:col-span-4 lg:row-span-1">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  "The integrations are seamless and the AI is incredibly intelligent. 
                  It's like having an extra team member."
                </p>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-slate-300 dark:bg-slate-600"></div>
                  <div className="ml-3">
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">Michael Rodriguez</p>
                    <p className="text-sm text-slate-600 dark:text-slate-300">CTO, StartupXYZ</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden lg:col-span-4 lg:row-span-1">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  "Security was our biggest concern, but SkyAgent's enterprise-grade 
                  protection gives us complete peace of mind."
                </p>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-slate-300 dark:bg-slate-600"></div>
                  <div className="ml-3">
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">Emily Watson</p>
                    <p className="text-sm text-slate-600 dark:text-slate-300">Security Lead, FinanceCo</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
              Ready to transform your workflow?
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
              Join thousands of teams already using SkyAgent to work smarter, not harder.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" className="group">
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg">
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white dark:bg-slate-900">
        <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex justify-center space-x-6 md:order-2">
            <a href="#" className="text-slate-400 hover:text-slate-500">
              <span className="sr-only">Twitter</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a href="#" className="text-slate-400 hover:text-slate-500">
              <span className="sr-only">GitHub</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
          <div className="mt-8 md:order-1 md:mt-0">
            <p className="text-center text-xs leading-5 text-slate-500">
              &copy; 2024 SkyAgent. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
} 