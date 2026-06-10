import GameDetailPage from "@/features/games/GameDetailPage";

type GameDetailRoutePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function GameDetailRoutePage({
  params,
}: GameDetailRoutePageProps) {
  const { slug } = await params;

  return <GameDetailPage slug={slug} />;
}