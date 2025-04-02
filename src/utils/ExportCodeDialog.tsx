import { Button } from "@/components/ui/button";
import { Command, CommandGroup, CommandItem, CommandList } from "@/components/ui/command";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { type Framework, languages } from "@/lib/selectOptions";
import type { Testimonial } from "@/models/Testimonial";
import { CardToCode, TestimonialCard } from "@/utils/TestimonialComponents";
import { ChevronDown, Code, Eye } from "lucide-react";
import { useState } from "react";

type ExportDialogProps = {
	isOpen: boolean;
	onOpenChange: (open: boolean) => void;
	testimonial: Testimonial;
};

export const ExportDialog = ({ isOpen, onOpenChange, testimonial }: ExportDialogProps) => {
	const [openLang, setOpenLang] = useState(false);
	const [selectedLang, setSelectedLang] = useState<Framework | null>(null);

	return (
		<Dialog open={isOpen} onOpenChange={onOpenChange}>
			<DialogContent className="flex flex-col justify-start items-center h-[90%]">
				<DialogHeader className="flex flex-col justify-start w-full">
					<DialogTitle className="tracking-wider">Export Testimonial</DialogTitle>
					<DialogDescription>Paste the component in your code</DialogDescription>
				</DialogHeader>
				<Tabs
					defaultValue="preview"
					className="w-full flex flex-col justify-center items-center h-full"
				>
					<div className="flex justify-between items-center gap-2 w-full">
						<TabsList className="flex justify-start rounded-lg">
							<TabsTrigger value="preview" className="flex items-center gap-2 w-28 rounded-lg">
								<Eye className="size-4" /> Preview
							</TabsTrigger>
							<TabsTrigger value="code" className="flex items-center gap-2 w-28 rounded-lg">
								<Code className="size-4" /> Code
							</TabsTrigger>
						</TabsList>
						<Popover open={openLang} onOpenChange={setOpenLang}>
							<PopoverTrigger asChild>
								<button
									type="button"
									disabled
									className="w-24 rounded-lg text-sm border py-2 disabled:opacity-50 disabled:cursor-not-allowed"
								>
									{selectedLang ? (
										<span className="flex items-center justify-center gap-1">
											<span className="w-[70%]">{selectedLang.label}</span>
											<span className="w-[30%]">
												<ChevronDown className="size-4" />
											</span>
										</span>
									) : (
										<span className="flex items-center justify-center gap-1">
											<span className="w-[70%] font-mono font-medium">react</span>
											<span className="w-[30%]">
												<ChevronDown className="size-4" />
											</span>
										</span>
									)}
								</button>
							</PopoverTrigger>
							<PopoverContent className="p-0" width="96px" side="bottom" align="center">
								<Command>
									<CommandList className="">
										<CommandGroup>
											{languages.map((lang) => (
												<CommandItem
													key={lang.value}
													value={lang.value}
													className=""
													onSelect={(value) => {
														const selectedLang =
															languages.find((lang) => lang.value === value) || null;
														setSelectedLang(selectedLang);
														setOpenLang(false);
													}}
												>
													{lang.label}
												</CommandItem>
											))}
										</CommandGroup>
									</CommandList>
								</Command>
							</PopoverContent>
						</Popover>
					</div>
					<div className="flex items-center justify-center w-full h-full">
						<TabsContent value="preview" className="w-full h-full rounded-lg">
							<div className="grid place-items-center w-full h-full">
								{TestimonialCard({ testimonial: testimonial })}
							</div>
						</TabsContent>
						<TabsContent value="code" className="w-full h-full rounded-lg overflow-x-hidden">
							<div className="w-full h-80">{CardToCode({ testimonial: testimonial })}</div>
						</TabsContent>
					</div>
				</Tabs>
				<DialogFooter className="w-full">
					<DialogClose asChild>
						<Button type="button" variant="secondary" className="w-full">
							Close
						</Button>
					</DialogClose>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};
