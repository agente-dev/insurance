'use client';

import type React from 'react';
import { useState, useCallback } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { UploadCloud, FileText, XCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface FileUploadCardProps {
  onFileSelect: (file: File, dataUri: string) => void;
  title: string;
  description: string;
  acceptedFileTypes?: string; // e.g., ".pdf,image/*"
}

export function FileUploadCard({
  onFileSelect,
  title,
  description,
  acceptedFileTypes = ".pdf,image/png,image/jpeg,image/tiff",
}: FileUploadCardProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const { toast } = useToast();

  const handleFileChange = (file: File | null) => {
    if (file) {
      if (!acceptedFileTypes.split(',').some(type => file.type.startsWith(type.replace(/\/\*$/, '')) || file.name.endsWith(type))) {
        toast({
          title: "סוג קובץ לא נתמך",
          description: `אנא העלה קובץ מסוג: ${acceptedFileTypes}`,
          variant: "destructive",
        });
        setSelectedFile(null);
        return;
      }

      // Max file size (e.g., 10MB) - adjust as needed for data URI limits
      const maxSizeInBytes = 10 * 1024 * 1024; 
      if (file.size > maxSizeInBytes) {
        toast({
          title: "הקובץ גדול מדי",
          description: `אנא העלה קובץ קטן מ-${maxSizeInBytes / (1024*1024)}MB.`,
          variant: "destructive",
        });
        setSelectedFile(null);
        return;
      }
      
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          onFileSelect(file, e.target.result as string);
        } else {
           toast({ title: "שגיאה בקריאת הקובץ", description: "לא ניתן היה לקרוא את הקובץ.", variant: "destructive" });
        }
      };
      reader.onerror = () => {
        toast({ title: "שגיאה בקריאת הקובץ", description: "אירעה שגיאה בעת ניסיון לקרוא את הקובץ.", variant: "destructive" });
      };
      reader.readAsDataURL(file);
    } else {
      setSelectedFile(null);
      // If there's a need to notify parent about deselection, add callback here
    }
  };

  const handleDragEnter = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFileChange(e.dataTransfer.files[0]);
      e.dataTransfer.clearData();
    }
  }, []);

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <UploadCloud className="h-6 w-6 text-primary" />
          {title}
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        {selectedFile ? (
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 border rounded-md bg-muted/50">
              <div className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm font-medium">{selectedFile.name}</span>
              </div>
              <Button variant="ghost" size="icon" onClick={() => handleFileChange(null)} aria-label="הסר קובץ">
                <XCircle className="h-5 w-5 text-destructive" />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground text-center">
              גודל קובץ: {(selectedFile.size / 1024).toFixed(2)} KB
            </p>
          </div>
        ) : (
          <div
            className={`flex flex-col items-center justify-center p-6 border-2 border-dashed rounded-md transition-colors
              ${isDragging ? 'border-primary bg-accent/10' : 'border-border hover:border-primary/50'}`}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            <UploadCloud className="h-12 w-12 text-muted-foreground mb-3" />
            <p className="text-sm text-muted-foreground mb-2">גרור ושחרר קובץ לכאן, או</p>
            <Input
              id="file-upload"
              type="file"
              className="hidden"
              onChange={(e) => handleFileChange(e.target.files ? e.target.files[0] : null)}
              accept={acceptedFileTypes}
            />
            <label htmlFor="file-upload">
              <Button asChild variant="outline"><span>בחר קובץ</span></Button>
            </label>
            <p className="mt-3 text-xs text-muted-foreground">
              סוגי קבצים נתמכים: PDF, PNG, JPG, TIFF. גודל מקסימלי: 10MB.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
