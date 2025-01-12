import Breadcrumbs from "@/components/ui/Breadcrumbs";
import CreatePostForm from "./_/CreatePostForm";

function CeatePostPage() {
  return (
    <div>
      <Breadcrumbs
        breadcrumbs={[
          { label: "پست ها", href: "/profile/posts" },
          {
            label: "ایجاد پست",
            href: `/profile/posts/create`,
            active: true,
          },
        ]}
      />
      <h1 className="text-secondary-700 font-bold text-2xl mb-6">
        ایجاد پست جدید
      </h1>
      <CreatePostForm />
    </div>
  );
}
export default CeatePostPage;
