<template>
  <div class="h-16 border-b sticky top-0 z-10 bg-background/80 backdrop-blur hidden lg:block">
    <div class="flex items-center h-full px-5 gap-5">
      <button
        v-for="(m, i) in menuOptions"
        :key="i"
        class="text-xs flex flex-col justify-center gap-1 items-center h-full text-muted-text"
      >
        <Icon :name="m.icon" class="w-[22px] h-[22px]" />
        <span>{{ m.title }}</span>
      </button>
    </div>
  </div>
  <section class="p-5 hidden md:block">
    <h1 class="font-bold text-xl">RE: National Conference on Sunday, May 12, 20223</h1>
    <!-- Inbox Heading -->
    <div class="flex items-center mt-3 border-b pb-5">
      <img
        src="https://randomuser.me/api/portraits/med/women/75.jpg"
        alt="Samantha Frost"
        class="w-10 h-10 rounded-full shrink-0"
      />
      <div class="ml-3">
        <p class="text-sm">
          From
          <NuxtLink
            to="#"
            class="text-primary underline underline-offset-4 decoration-primary/20 hover:decoration-primary"
            >Samantha Frost &lt;samantha.frost@acmecorp.com&gt;
          </NuxtLink>
        </p>
        <div class="flex items-center gap-3 mt-1.5 text-muted-text">
          <button class="flex items-center gap-2 text-sm">
            <Icon class="text-muted-text" name="fluent:mail-24-filled" />
            <span>Details</span>
          </button>
          <button class="flex items-center gap-2 text-sm">
            <Icon class="text-muted-text" name="fluent:info-24-filled" />
            <span>Headers</span>
          </button>
          <button class="flex items-center gap-2 text-sm">
            <Icon class="text-muted-text" name="fluent:draw-text-24-filled" />
            <span>Plain text</span>
          </button>
        </div>
      </div>
    </div>
    <div class="py-5 max-w-xl">
      <p>Good day,</p>
      <br />
      <p>
        I am writing to confirm your attendance at the National Conference on Sunday, May 12, 20223
        at 9:30 a.m. at The Acme Hotel Company. The conference will include, but not limited to:
      </p>
      <br />

      <ul class="list-disc list-inside">
        <li>Presentations from keynote speakers</li>
        <li>Networking opportunities</li>
        <li>Breakfast, lunch, and dinner will be provided</li>
      </ul>
      <br />

      <p>
        Please let me know if you have any questions or concerns. I look forward to seeing you at
        the conference!
      </p>
      <br />
      <p>Best regards,</p>
      <p>Samantha Frost</p>
    </div>
  </section>
</template>

<script setup lang="ts">
  const menuOptions = [
    { title: "Reply", icon: "fluent:arrow-reply-24-regular" },
    { title: "Reply all", icon: "fluent:arrow-reply-all-24-regular" },
    { title: "Forward", icon: "fluent:arrow-forward-24-regular" },
    { title: "Delete", icon: "fluent:delete-24-regular" },
    { title: "Archive", icon: "fluent:archive-24-regular" },
    { title: "Print", icon: "fluent:print-24-regular" },
    { title: "More", icon: "fluent:more-vertical-24-regular" },
  ];
</script>
